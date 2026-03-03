import { lazy, Suspense } from "react";
const TemplateOne = lazy(() => import("../../templates/TemplateOne"));
const TemplateTwo = lazy(() => import("../../templates/TemplateTwo"));
const TemplateThree = lazy(() => import("../../templates/TemplateThree"));
const TemplateFour = lazy(() => import("../../templates/TemplateFour"));
const TemplateFive = lazy(() => import("../../templates/TemplateFive"));
const TemplateSix = lazy(() => import("../../templates/TemplateSix"));
const TemplateSeven = lazy(() => import("../../templates/TemplateSeven"));


export default function TemplatesPanel({
  selectedTemplate,
  setSelectedTemplate,
  designSettings,
  setDesignSettings,
}) {

  const templates = [
    { id: "templateOne", name: "Modern", component: TemplateOne },
    { id: "templateTwo", name: "Professional", component: TemplateTwo },
    { id: "templateThree", name: "Simple", component: TemplateThree },
    { id: "templateFour", name: "Dark Sidebar", component: TemplateFour },
    { id: "templateFive", name: "Minimal Clean", component: TemplateFive },
    { id: "templateSix", name: "ATS Classic", component: TemplateSix },
    { id: "templateSeven", name: "Two Column", component: TemplateSeven },
  ];

  const colorSupportedTemplates = [
    "templateThree",
    "templateFour",
    
  ];

const colors = [
  "#CBD5E1", // Slate Light
  "#BFDBFE", // Light Blue
  "#BBF7D0", // Light Mint
  "#E9D5FF", // Soft Purple
  "#FEF3C7", // Cream
   "#2563eb",
  "#059669",
  "#ea580c",
];
  return (
    <div className="p-6">

      <h2 className="text-xl font-bold mb-6">Choose Template</h2>

      {/* 🎨 SHOW COLORS ONLY FOR 3,4,7 */}
      {colorSupportedTemplates.includes(selectedTemplate) && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3">
            Accent Color
          </h3>

          <div className="flex gap-3">
            {colors.map((color) => (
              <button
                key={color}
                onClick={(e) => {
                  e.stopPropagation();
                  setDesignSettings((prev) => ({
                    ...prev,
                    primaryColor: color,
                  }));
                }}
                className={`w-7 h-7 rounded-full border-2 transition
                  ${
                    designSettings?.primaryColor === color
                      ? "border-black scale-110"
                      : "border-gray-300"
                  }
                `}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="space-y-6">
        {templates.map((template) => {
          const PreviewComponent = template.component;

          return (
            <div
              key={template.id}
              onClick={() => {
                setSelectedTemplate(template.id);

              
              
              }}
              className={`cursor-pointer border rounded-xl overflow-hidden transition shadow-sm
                ${
                  selectedTemplate === template.id
                    ? "border-peach-500 ring-2 ring-peach-300"
                    : "border-gray-200 hover:border-peach-300"
                }
              `}
            >
              <div
  className="scale-[0.35] origin-top-left w-[800px] pointer-events-none"
  style={{
    "--primary-color":
      designSettings?.primaryColor || "#2563eb",
  }}
>
  <Suspense fallback={<div>Loading...</div>}>
  <PreviewComponent
    data={{}}
    designSettings={designSettings}
  />
  </Suspense>
</div>

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