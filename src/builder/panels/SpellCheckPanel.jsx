import { AlertTriangle, CheckCircle } from "lucide-react";
import { useMemo } from "react";

export default function SpellCheckPanel({ formData }) {

  const issues = useMemo(() => {
    const problems = [];


    // EMAIL
    if (!formData.email || !formData.email.includes("@")) {
      problems.push("Email address seems invalid.");
    }

    // SUMMARY
    if (!formData.summary || formData.summary.length < 40) {
      problems.push("Professional summary is too short.");
    }

    // SKILLS (FIXED)
    if (!formData.skills) {
      problems.push("Add more skills (at least 3 recommended).");
    } else {
      const skillsArray = Array.isArray(formData.skills)
        ? formData.skills
        : formData.skills.split(",");

      if (skillsArray.length < 3) {
        problems.push("Add more skills (at least 3 recommended).");
      }
    }

    // EXPERIENCE DESCRIPTION QUALITY
    if (Array.isArray(formData.experience)) {
      formData.experience.forEach((exp, index) => {
        if (!exp.description || exp.description.length < 50) {
          problems.push(
            `Experience #${index + 1} description is too short.`
          );
        }
      });
    }

    return problems;
  }, [formData]);

  return (
    <div className="p-6">

      <h2 className="text-xl font-bold mb-2">Spell Check & Tips</h2>
      <p className="text-sm text-slate-500 mb-6">
        Improve clarity and completeness of your resume.
      </p>

      {issues.length === 0 ? (
        <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg text-green-700">
          <CheckCircle size={20} />
          <span>Your resume looks great! No issues found.</span>
        </div>
      ) : (
        <div className="space-y-3">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg text-yellow-800"
            >
              <AlertTriangle size={18} className="mt-1" />
              <span>{issue}</span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}