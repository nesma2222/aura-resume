import TemplateOne from "../../templates/TemplateOne";
import TemplateTwo from "../../templates/TemplateTwo";
import TemplateThree from "../../templates/TemplateThree";

export default function ResumePreview({
  selectedTemplate,
  formData,
  designSettings,
  sections,
}) {

  // 🔹 Dynamic wrapper styling from Design Panel
  const wrapperClass = `
    bg-white shadow-xl w-[800px] min-h-[1100px] p-8
    ${designSettings.fontFamily}
    ${designSettings.fontSize}
    ${designSettings.lineSpacing}
    ${designSettings.sectionSpacing}
  `;

  const style = {
    "--primary-color": designSettings.primaryColor,
  };

  // 🔹 Choose Template
  const renderTemplate = () => {
    const templateProps = {
      data: formData,
      sections,
    };

    switch (selectedTemplate) {
      case "templateTwo":
        return <TemplateTwo {...templateProps} />;

      case "templateThree":
        return <TemplateThree {...templateProps} />;

      case "templateOne":
      default:
        return <TemplateOne {...templateProps} />;
    }
  };

  return (
    <div id="resume-preview" className={wrapperClass} style={style}>
      {renderTemplate()}
    </div>
  );
}