import TemplateOne from "../../templates/TemplateOne";
import TemplateTwo from "../../templates/TemplateTwo";
import TemplateThree from "../../templates/TemplateThree";

export default function TemplatesPanel({
  selectedTemplate,
  setSelectedTemplate,
}) {
  const templates = [
    {
      id: "templateOne",
      name: "Modern",
      component: TemplateOne,
    },
    {
      id: "templateTwo",
      name: "Professional",
      component: TemplateTwo,
    },
    {
      id: "templateThree",
      name: "Simple",
      component: TemplateThree,
    },
  ];

  return (
    <div className="p-6">

      <h2 className="text-xl font-bold mb-6">Choose Template</h2>

      <div className="space-y-6">

        {templates.map((template) => {
          const PreviewComponent = template.component;

          return (
            <div
              key={template.id}
              onClick={() => setSelectedTemplate(template.id)}
              className={`cursor-pointer border rounded-xl overflow-hidden transition shadow-sm
                ${
                  selectedTemplate === template.id
                    ? "border-peach-500 ring-2 ring-peach-300"
                    : "border-gray-200 hover:border-peach-300"
                }
              `}
            >
              {/* Small Preview Thumbnail */}
              <div className="scale-[0.35] origin-top-left w-[800px] pointer-events-none">
                <PreviewComponent data={{}} />
              </div>

              {/* Template Name */}
              <div className="p-3 bg-white border-t text-center font-medium">
                {template.name}
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}