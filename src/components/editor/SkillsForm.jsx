import { useState } from "react";

export default function SkillsForm({ formData, setFormData }) {

  const [skillInput, setSkillInput] = useState("");

  // Add skill
  const addSkill = () => {
    if (!skillInput.trim()) return;

    setFormData({
      ...formData,
      skills: [...(formData.skills || []), skillInput]
    });

    setSkillInput("");
  };

  // Remove skill
  const removeSkill = (index) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);

    setFormData({
      ...formData,
      skills: updatedSkills
    });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-3">
      <h2 className="text-lg font-semibold">Skills</h2>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter a skill"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <button
          onClick={addSkill}
          className="bg-pink-400 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {/* Skills List */}
      <div className="flex flex-wrap gap-2">
        {formData.skills?.map((skill, index) => (
          <span
            key={index}
            className="bg-pink-100 px-3 py-1 rounded-full text-sm flex items-center gap-2"
          >
            {skill}
            <button
              onClick={() => removeSkill(index)}
              className="text-red-500"
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
