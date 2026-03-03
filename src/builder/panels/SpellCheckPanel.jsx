import { AlertTriangle, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SpellCheckPanel({ formData }) {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Only extract meaningful content (NOT names, city, email, etc.)
  const extractRelevantText = (data) => {
    let text = "";

    // Summary
    if (data.summary) {
      text += " " + data.summary;
    }

    // Experience descriptions only
    if (Array.isArray(data.experience)) {
      data.experience.forEach((exp) => {
        if (exp.description) {
          text += " " + exp.description;
        }
      });
    }

    // Optional: skills if they are sentence-based
    if (Array.isArray(data.skills)) {
      text += " " + data.skills.join(" ");
    }

    return text;
  };

  useEffect(() => {
    const checkSpelling = async () => {
      const fullText = extractRelevantText(formData);

      if (!fullText.trim()) {
        setIssues([]);
        return;
      }

      setLoading(true);

      try {
        const response = await axios.post(
          "https://api.languagetool.org/v2/check",
          new URLSearchParams({
            text: fullText,
            language: "en-US",
          })
        );

        const matches = response.data.matches;

        // ✅ Filter unwanted issues
        const filtered = matches
          .filter((match) => {
            // Ignore whitespace warnings
            if (match.rule.issueType === "typographical") return false;

            // Ignore proper noun false positives
            if (match.rule.issueType === "misspelling") {
              const word = match.context.text.substring(
                match.context.offset,
                match.context.offset + match.context.length
              );

              // Ignore capitalized words (likely names/places)
              if (word[0] === word[0].toUpperCase()) {
                return false;
              }
            }

            return true;
          })
          .map((match) => ({
            message: match.message,
            suggestion: match.replacements[0]?.value || "No suggestion",
          }));

        setIssues(filtered);
      } catch (error) {
        console.error("Spellcheck error:", error);
      }

      setLoading(false);
    };

    checkSpelling();
  }, [formData]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">Spell Check & Tips</h2>
      <p className="text-sm text-slate-500 mb-6">
        Detect spelling & grammar issues in your resume.
      </p>

      {loading && <p className="text-slate-500">Checking...</p>}

      {!loading && issues.length === 0 && (
        <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg text-green-700">
          <CheckCircle size={20} />
          <span>No spelling or grammar issues found </span>
        </div>
      )}

      {!loading && issues.length > 0 && (
        <div className="space-y-3">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg text-yellow-800"
            >
              <AlertTriangle size={18} className="mt-1" />
              <div>
                <p>{issue.message}</p>
                <p className="text-sm font-semibold">
                  Suggestion: {issue.suggestion}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}