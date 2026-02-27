import TemplateOne from "../../templates/TemplateOne";
import TemplateTwo from "../../templates/TemplateTwo";
import TemplateThree from "../../templates/TemplateThree";
import TemplateFour from "../../templates/TemplateFour";
import TemplateFive from "../../templates/TemplateFive";
import TemplateSix from "../../templates/TemplateSix";
import TemplateSeven from "../../templates/TemplateSeven";

export default function ResumePreview({
  selectedTemplate,
  formData,
  designSettings,
  sections,
}) {

  const wrapperClass = `
    bg-white shadow-xl w-[800px] min-h-[1100px] p-8
    ${designSettings.fontFamily}
    ${designSettings.fontSize}
    ${designSettings.lineSpacing}
    ${designSettings.sectionSpacing}
  `;

  // ✅ Strictly separate default colors per template
  const templateDefaultColors = {
    templateThree: "#059669", // Green
    templateFour: "#dc2626",  // Red
    templateSeven: "#9333ea", // Purple
  };

  let templateColor;

  if (selectedTemplate === "templateTwo") {
    // TemplateTwo ONLY uses designSettings color
    templateColor = designSettings.primaryColor || "#1f2937";
  } 
  else if (templateDefaultColors[selectedTemplate]) {
    // Template 3,4,7 use their own defaults
    templateColor =
      designSettings.primaryColor ||
      templateDefaultColors[selectedTemplate];
  } 
  else {
    // Other templates no color system
    templateColor = designSettings.primaryColor || "#000000";
  }

  const style = {
    "--primary-color": templateColor,
  };

  const renderTemplate = () => {
    const templateProps = {
      data: formData,
      sections,
      designSettings,
    };

    switch (selectedTemplate) {
      case "templateTwo":
        return <TemplateTwo {...templateProps} />;

      case "templateThree":
        return <TemplateThree {...templateProps} />;

      case "templateFour":
        return <TemplateFour {...templateProps} />;

      case "templateFive":
        return <TemplateFive {...templateProps} />;

      case "templateSix":
        return <TemplateSix {...templateProps} />;

      case "templateSeven":
        return <TemplateSeven {...templateProps} />;

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