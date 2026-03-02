import { useState } from "react";
import { useEffect } from "react";
import ContactForm from "./ContactForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import SummaryForm from "./SummaryForm";
import Finalize from "../Finalize/Finalize";


import html2pdf from "html2pdf.js";
import { calculateResumeScore } from "../../utils/resumeScore";

import { templateList } from "../../data/templateList";
import { initialResumeData } from "../../data/initialResumeData";

import { ArrowLeft, LayoutGrid } from "lucide-react";

export default function EditorPage({
  selectedTemplate,
  formData,
  setFormData,
  onBack,
  goToTemplateSwitcher,
  activeEditorSection,
  designSettings
}) {
  const steps = [
    "Contacts",
    "Experience",
    "Education",
    "Skills",
    "Summary",
    "Finalize",
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const currentTemplate = selectedTemplate || "templateOne";
 

const activeTemplate = templateList.find(
  (template) => template.id === currentTemplate
);

const SelectedTemplate = activeTemplate?.component;
 

  const resumeScore = calculateResumeScore(formData);

  

  const handleReset = () => {
    setFormData(initialResumeData);
    setCurrentStep(0);
  };

  const handleDownload = () => {
    const element = document.getElementById("resume-preview");
    if (!element) return;

    const options = {
      margin: 0,
      filename: "My_Resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  };


  useEffect(() => {
  if (!formData || Object.keys(formData).length === 0) {
    setFormData(initialResumeData);
  }
}, []);

useEffect(() => {
  if (!activeEditorSection) return;

  const sectionToStepMap = {
    contacts: 0,
    experience: 1,
    education: 2,
    skills: 3,
    summary: 4,
    finalize: 5,
  };

  const stepIndex = sectionToStepMap[activeEditorSection];

  if (stepIndex !== undefined) {
    setCurrentStep(stepIndex);
  }
}, [activeEditorSection]);

  const renderStepForm = () => {
    switch (currentStep) {
      case 0:
        return <ContactForm formData={formData} setFormData={setFormData} />;
      case 1:
        return <ExperienceForm formData={formData} setFormData={setFormData} />;
      case 2:
        return <EducationForm formData={formData} setFormData={setFormData} />;
      case 3:
        return <SkillsForm formData={formData} setFormData={setFormData} />;
      case 4:
        return <SummaryForm formData={formData} setFormData={setFormData} />;
      case 5:
        return <Finalize formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] py-10 overflow-x-hidden">

      {/* TOP BAR */}
      <div className="flex justify-between mb-6 max-w-7xl mx-auto px-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-peach-500 font-semibold transition"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="flex gap-4">
          <button
            onClick={handleReset}
            className="bg-peach-500 text-white px-4 py-2 rounded-lg hover:bg-peach-600 transition"
          >
            Start from Scratch
          </button>

          <button
            onClick={handleDownload}
            className="bg-peach-500 text-white px-6 py-2 rounded-lg shadow hover:bg-peach-600 transition font-semibold"
          >
            Download PDF
          </button>
        </div>
      </div>

      <div className="flex max-w-7xl mx-auto gap-10 px-4">

        {/* LEFT SIDE */}
        <div className="w-1/2">

       

          {/* Profile Completion */}
<div className="bg-white rounded-2xl shadow p-6 mb-6 border border-slate-100">

  <div className="flex justify-between items-center mb-3">
    <h3 className="font-semibold text-slate-800 text-sm tracking-wide uppercase">
      Profile Completion
    </h3>

    
  </div>

  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
    <div
      className="bg-gradient-to-r from-peach-400 to-peach-500 h-full transition-all duration-500"
      style={{ width: `${resumeScore}%` }}
    />
  </div>

  <p className="text-xs text-slate-500 mt-2">
    Complete all sections to reach 100% and improve your resume quality.
  </p>

</div>

          {/* Steps */}
          <div className="flex flex-wrap gap-4 mb-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <span
                  className={`rounded-full w-6 h-6 flex items-center justify-center border ${
                    currentStep === index
                      ? "border-peach-500 bg-peach-500 text-white"
                      : "border-gray-300 text-gray-500"
                  }`}
                >
                  {index + 1}
                </span>

                <span
                  className={`ml-2 text-sm font-medium ${
                    currentStep === index
                      ? "text-peach-500"
                      : "text-gray-500"
                  }`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>

          {/* FORM AREA */}
          <div className="bg-white rounded-2xl shadow p-6">
            {renderStepForm()}

            {currentStep !== 5 && (
              <div className="flex justify-between mt-6">
                {currentStep > 0 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="px-4 py-2 border rounded hover:bg-gray-100"
                  >
                    Back
                  </button>
                )}

                {currentStep < steps.length - 1 && (
                  <button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="px-4 py-2 bg-peach-500 text-white rounded hover:bg-peach-600"
                  >
                    Next: {steps[currentStep + 1]}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE PREVIEW */}
        <div className="w-1/2 flex justify-center">
          <div className="w-full max-w-[800px] bg-white rounded-2xl shadow-lg overflow-hidden">

            {/* Top bar inside preview */}
            <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-50">

              <div className="flex items-center gap-3">
                <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                  {resumeScore}%
                </span>
                <span className="text-slate-600 font-medium">
                  Your resume score 
                </span>
              </div>

              <button
                onClick={() =>
                  goToTemplateSwitcher(currentTemplate)
                }
                className="flex items-center gap-2 text-peach-600 font-semibold hover:underline"
              >
                <LayoutGrid size={18} />
                Change Template
              </button>
            </div>

            {/* Resume Preview */}
            {/* Resume Preview */}
<div
  id="resume-preview"
  className="p-8"
  style={{
  "--primary-color":
    activeTemplate?.supportsPrimaryColor
      ? designSettings?.primaryColor || "#000000"
      : undefined,
}}
>
              {SelectedTemplate && (
  <SelectedTemplate
    data={formData}
    designSettings={designSettings}
  />
)}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}