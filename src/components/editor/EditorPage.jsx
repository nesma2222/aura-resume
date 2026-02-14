import { useState } from "react";
import ContactForm from "./ContactForm";
import ExperienceForm from "./ExperienceForm";
// Import other forms if you have them
// import EducationForm from "./EducationForm";
// import SkillsForm from "./SkillsForm";
// import SummaryForm from "./SummaryForm";
// import FinalizeForm from "./FinalizeForm";

// Import templates
import TemplateOne from "../../templates/TemplateOne";
import TemplateTwo from "../../templates/TemplateTwo";

export default function EditorPage({ selectedTemplate }) {
  // Step navigation
  const steps = ["Contacts", "Experience", "Education", "Skills", "Summary", "Finalize"];
  const [currentStep, setCurrentStep] = useState(0);

  // Initial form data structure
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    desiredJobTitle: "",
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

  // Reset handler for "Start from Scratch"
  const handleReset = () => {
    setFormData(initialFormData);
    setCurrentStep(0);
  };

  // Render the current step form
  const renderStepForm = () => {
    switch (currentStep) {
      case 0:
        return <ContactForm formData={formData} setFormData={setFormData} />;
      case 1:
        return <ExperienceForm formData={formData} setFormData={setFormData} />;
      // case 2:
      //   return <EducationForm formData={formData} setFormData={setFormData} />;
      // case 3:
      //   return <SkillsForm formData={formData} setFormData={setFormData} />;
      // case 4:
      //   return <SummaryForm formData={formData} />;
      // case 5:
      //   return <FinalizeForm formData={formData} />;
      default:
        return <div>Step not implemented yet</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] p-10">
      {/* Start from Scratch Button */}
      <div className="flex justify-end mb-6 max-w-7xl mx-auto">
        <button
          onClick={handleReset}
          className="bg-peach-500 text-white px-4 py-2 rounded-lg hover:bg-peach-600 transition"
        >
          Start from Scratch
        </button>
      </div>

      <div className="flex max-w-7xl mx-auto gap-10">
        {/* LEFT SIDE - Form and Steps */}
        <div className="w-1/2">
          {/* Step Navigation */}
          <div className="flex items-center space-x-6 mb-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <span
                  className={`rounded-full w-6 h-6 flex items-center justify-center border ${
                    currentStep === index
                      ? "border-blue-500 bg-blue-500 text-white"
                      : "border-gray-300 text-gray-500"
                  }`}
                >
                  {index + 1}
                </span>
                <span
                  className={`ml-2 text-sm font-medium ${
                    currentStep === index ? "text-blue-500" : "text-gray-500"
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

            {/* Next / Back Buttons */}
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
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Next: {steps[currentStep + 1]}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Resume Preview */}
        <div className="w-1/2 bg-gray-50 p-6 rounded-2xl shadow">
          {selectedTemplate === "templateOne" && <TemplateOne data={formData} />}
          {selectedTemplate === "templateTwo" && <TemplateTwo data={formData} />}
        </div>
      </div>
    </div>
  );
}
