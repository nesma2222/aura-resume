import { useState } from "react";

export default function LanguagesSection({
  formData,
  setFormData,
  openSection,
  toggleSection
}) {

  const addLanguage = () => {
    setFormData({
      ...formData,
      languages: [
        ...(formData.languages || []),
        { name: "", level: "" }
      ],
    });
  };

  const updateLanguage = (index, field, value) => {
    const updated = [...formData.languages];
    updated[index][field] = value;

    setFormData({
      ...formData,
      languages: updated,
    });
  };

  const deleteLanguage = (index) => {
    const updated = formData.languages.filter((_, i) => i !== index);

    setFormData({
      ...formData,
      languages: updated,
    });
  };

  return (
    <div className="bg-white border rounded-lg p-4 mb-4">

      {/* HEADER */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleSection("languages")}
      >
        <div>
          <h3 className="font-semibold">Languages</h3>
          <p className="text-sm text-gray-500">
            Add your native and foreign languages.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span>
            {openSection === "languages" ? "▲" : "▼"}
          </span>
        </div>
      </div>

      {/* BODY */}
      {openSection === "languages" && (
        <div className="mt-4 space-y-3">

          {(formData.languages || []).map((lang, index) => (
            <div
              key={index}
              className="flex gap-2 items-center"
            >
              <input
                placeholder="Language"
                value={lang.name}
                onChange={(e) =>
                  updateLanguage(index, "name", e.target.value)
                }
                className="border p-2 rounded w-full"
              />

              <select
                value={lang.level}
                onChange={(e) =>
                  updateLanguage(index, "level", e.target.value)
                }
                className="border p-2 rounded w-full"
              >
                <option value="">Select Level</option>
                <option>Native</option>
                <option>Fluent</option>
                <option>Intermediate</option>
                <option>Basic</option>
              </select>

              <button
                onClick={() => deleteLanguage(index)}
                className="text-red-500"
              >
                🗑
              </button>
            </div>
          ))}

          <button
            onClick={addLanguage}
            className="text-peach-600 font-medium"
          >
            + Add Language
          </button>
        </div>
      )}

    </div>
  );
}
