import React, { useState } from "react";
import TemplateOne from "../../templates/TemplateOne";
import TemplateTwo from "../../templates/TemplateTwo";
import TemplateThree from "../../templates/TemplateThree";

export default function TemplateSwitcher({
  formData,
  selectedTemplate,
  onBack,
}) {
  const [currentTemplate, setCurrentTemplate] = useState(selectedTemplate);

  return (
    <div className="min-h-screen bg-[#f9fafb] flex">

      {/* Sidebar */}
      {/* <div className="w-64 bg-white shadow-lg p-6">
        <button
          onClick={() => onBack={(newTemplate) => {
  setSelectedTemplate(newTemplate);
  setView("editor");
          }}
          className="mb-6 text-blue-600 font-semibold"
        >
          ← Back to editor
        </button> */}
        <div className="w-64 bg-white shadow-lg p-6">
  <button
    onClick={() => onBack(currentTemplate)}
    className="mb-6 text-blue-600 font-semibold"
  >
    ← Back to editor
  </button>

        <h2 className="font-bold text-lg mb-4">Templates</h2>

        <div className="space-y-3">
          <div
            onClick={() => setCurrentTemplate("templateOne")}
            className="cursor-pointer p-2 border rounded hover:bg-gray-100"
          >
            Template One
          </div>

          <div
            onClick={() => setCurrentTemplate("templateTwo")}
            className="cursor-pointer p-2 border rounded hover:bg-gray-100"
          >
            Template Two
          </div>

          <div
            onClick={() => setCurrentTemplate("templateThree")}
            className="cursor-pointer p-2 border rounded hover:bg-gray-100"
          >
            Template Three
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="flex-1 p-10 flex justify-center">
        <div className="w-full max-w-[800px] bg-white shadow-lg p-8">

          {currentTemplate === "templateOne" && (
            <TemplateOne data={formData} />
          )}
          {currentTemplate === "templateTwo" && (
            <TemplateTwo data={formData} />
          )}
          {currentTemplate === "templateThree" && (
            <TemplateThree data={formData} />
          )}

        </div>
      </div>

    </div>
  );
}