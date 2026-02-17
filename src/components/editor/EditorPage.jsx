import { useState } from "react";
import ContactForm from "./ContactForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import SummaryForm from "./SummaryForm";
import html2pdf from "html2pdf.js";

import TemplateOne from "../../templates/TemplateOne";
import TemplateTwo from "../../templates/TemplateTwo";
import TemplateThree from "../../Templates/TemplateThree";
import { ArrowLeft } from "lucide-react";

export default function EditorPage({ selectedTemplate, onBack }) {
  const steps = ["Contacts", "Experience", "Education", "Skills", "Summary", "Finalize"];
  const [currentStep, setCurrentStep] = useState(0);

  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    desiredJobTitle: "",
    country: "",
    city: "",
    address: "",
    postCode: "",
    linkedin: "",
    portfolio: "",
    experience: [
      {
        jobTitle: "",
        employer: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    education: [],
    skills: [],
    summary: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleReset = () => {
    setFormData(initialFormData);
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
        return (
          <div className="text-center space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Resume Ready 🎉
            </h2>
            <button
              onClick={handleDownload}
              className="bg-peach-500 text-white px-6 py-2 rounded-lg hover:bg-peach-600 transition"
            >
              Download PDF
            </button>
          </div>
        );
      default:
        return <div>Step not implemented yet</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] p-10">

      {/* Top buttons */}
      <div className="flex justify-between mb-6 max-w-7xl mx-auto">
        {/* Back to ResumeChoiceView */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-peach-500 font-semibold transition"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        {/* Start from Scratch */}
        <button
          onClick={handleReset}
          className="bg-peach-500 text-white px-4 py-2 rounded-lg hover:bg-peach-600 transition"
        >
          Start from Scratch
        </button>
      </div>

      <div className="flex max-w-7xl mx-auto gap-10">

        {/* LEFT SIDE: Form */}
        <div className="w-1/2">

          {/* Steps */}
          <div className="flex items-center space-x-6 mb-6">
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
                    currentStep === index ? "text-peach-500" : "text-gray-500"
                  }`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>

          {/* Step Form */}
          <div className="bg-white rounded-2xl shadow p-6">
            {renderStepForm()}

            {/* Step Navigation */}
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
          </div>
        </div>

        {/* RIGHT SIDE: Live Preview */}
        <div
          id="resume-preview"
          className="w-[210mm] min-h-[297mm] bg-white p-8 shadow"
        >
          {selectedTemplate === "templateOne" && <TemplateOne data={formData} />}
          {selectedTemplate === "templateTwo" && <TemplateTwo data={formData} />}
          {selectedTemplate === "templateThree" && <TemplateThree data={formData} />}
        </div>

      </div>
    </div>
  );
}
