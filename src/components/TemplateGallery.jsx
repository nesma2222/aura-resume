import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, User, Sparkles, Briefcase } from "lucide-react";
import { templateList } from "../data/templateList";
import { demoData } from "../data/demoData";

function TemplateGallery({ setSelectedTemplate }) {

  const navigate = useNavigate(); 

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", icon: <FileText size={16} /> },
    { name: "Simple", icon: <User size={16} /> },
    { name: "Modern", icon: <Sparkles size={16} /> },
    { name: "Professional", icon: <Briefcase size={16} /> },
  ];

  const filteredTemplates =
    activeCategory === "All"
      ? templateList
      : templateList.filter(
          (template) => template.category === activeCategory
        );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Back */}
      <button
        onClick={() => navigate("/")}   
        className="flex items-center gap-2 text-slate-500 hover:text-peach-500 font-semibold mb-8"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-slate-800 mb-3">
          Resume Templates
        </h2>
        <p className="text-slate-500">
          Choose a template style
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.name}   
            onClick={() => setActiveCategory(cat.name)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition
              ${
                activeCategory === cat.name
                  ? "bg-slate-800 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {filteredTemplates.map((template) => {
          const PreviewComponent = template.component;

          return (
            <div
              key={template.id}
              onClick={() => {
                setSelectedTemplate(template.id);
                navigate("/resume-choice");  // ✅ now works
              }}
              className="group relative bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >

              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition flex items-center justify-center z-10">
                <span className="bg-white text-slate-800 font-semibold px-6 py-2 rounded-full shadow">
                  Use Template
                </span>
              </div>

              <div className="aspect-[3/4] bg-slate-50 overflow-hidden flex items-start justify-start p-6">
                <div className="w-[800px] scale-[0.45] origin-top-left pointer-events-none">
                  <PreviewComponent data={demoData} />
                </div>
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default TemplateGallery;