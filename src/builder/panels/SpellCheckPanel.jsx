import { AlertTriangle, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SpellCheckPanel({ formData }) {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Extract all text from formData (handles arrays & objects)
  const extractAllText = (data) => {
    let text = "";

    Object.values(data).forEach((value) => {                  //Recursive-style data flattening
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (typeof item === "object") {
            Object.values(item).forEach((v) => {
              text += " " + v;
            });
          } else {
            text += " " + item;
          }
        });
      } else if (typeof value === "string") {
        text += " " + value;
      }
    });

    return text;
  };

  useEffect(() => {
    const checkSpelling = async () => {
      const fullText = extractAllText(formData);

      if (!fullText.trim()) return;

      setLoading(true);

      try {
        const response = await axios.post(
          "https://api.languagetool.org/v2/check",    //client side API integration
          new URLSearchParams({
            text: fullText,
            language: "en-US",
          })
        );

        const matches = response.data.matches;

        const formattedIssues = matches.map((match) => ({
          message: match.message,
          suggestion: match.replacements[0]?.value || "No suggestion",
        }));

        setIssues(formattedIssues);
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
          <span>No spelling or grammar issues found 🎉</span>
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