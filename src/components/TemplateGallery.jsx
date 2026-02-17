// import { FileText, User, Sparkles, Briefcase, Camera, ArrowLeft } from "lucide-react";
// import TemplateOne from "../templates/TemplateOne";
// import TemplateTwo from "../templates/TemplateTwo";

// function TemplateGallery({ setView, setSelectedTemplate }) {

//   const categories = [
//     { name: "All Templates", icon: <FileText size={18} /> },
//     { name: "Simple", icon: <User size={18} /> },
//     { name: "Modern", icon: <Sparkles size={18} /> },
//     { name: "Professional", icon: <Briefcase size={18} /> },
//     { name: "With photo", icon: <Camera size={18} /> },
//   ];

//   const templates = [
//     {
//       id: "templateOne",
//       name: "Classic Simple",
//       category: "Simple",
//       component: TemplateOne,
//     },
//     {
//       id: "templateTwo",
//       name: "Modern Clean",
//       category: "Modern",
//       component: TemplateTwo,
//     },
//     {
//       id: "templateThree",
//       name: "Professional Corporate",
//       category: "Professional",
//       component: TemplateOne, // reuse for now
//     },
//     {
//       id: "templateFour",
//       name: "Modern Edge",
//       category: "Modern",
//       component: TemplateTwo, // reuse for now
//     },
//     {
//       id: "templateFive",
//       name: "Simple Elegant",
//       category: "Simple",
//       component: TemplateOne, // reuse for now
//     },
//   ];

//   const demoData = {
//     firstName: "John",
//     lastName: "Doe",
//     email: "john@email.com",
//     phone: "+123456789",
//     desiredJobTitle: "Frontend Developer",
//     city: "New York",
//     country: "USA",
//     experience: [
//       {
//         jobTitle: "Software Engineer",
//         employer: "Tech Corp",
//         location: "NYC",
//         startDate: "2021",
//         endDate: "2024",
//         description: "Worked on building modern web applications."
//       }
//     ],
//     education: [
//       {
//         degree: "B.Sc Computer Science",
//         school: "State University",
//         location: "NY",
//         startDate: "2017",
//         endDate: "2021",
//         description: ""
//       }
//     ],
//     skills: ["React", "Tailwind", "JavaScript"],
//     summary: "Passionate developer focused on creating clean UI and scalable applications."
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-12 py-12 animate-in fade-in duration-500">

//       {/* Back */}
//       <button
//         onClick={() => setView("landing")}
//         className="flex items-center gap-2 text-slate-500 hover:text-peach-500 font-semibold mb-10 transition"
//       >
//         <ArrowLeft size={20} />
//         Back
//       </button>

//       {/* Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-5xl font-black text-slate-800 mb-4">
//           Resume templates
//         </h2>

//         <p className="text-slate-500 text-lg">
//           Simple to use and ready in minutes —
//           <span className="text-peach-500 font-semibold italic">
//             {" "}give it a try for free now!
//           </span>
//         </p>
//       </div>

//       {/* Categories UI (non-functional for now) */}
//       <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-peach-100 pb-4">
//         {categories.map((cat, i) => (
//           <button
//             key={i}
//             className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all ${
//               i === 0
//                 ? "bg-peach-500 text-white shadow-lg shadow-peach-200"
//                 : "text-slate-500 hover:bg-peach-50 hover:text-peach-500"
//             }`}
//           >
//             {cat.icon}
//             {cat.name}
//           </button>
//         ))}
//       </div>

//       {/* Templates Grid */}
//       <div className="grid md:grid-cols-3 gap-10">

//         {templates.map((template) => {
//           const PreviewComponent = template.component;

//           return (
//             <div
//               key={template.id}
//               onClick={() => {
//                 setSelectedTemplate(template.id);
//                 setView("resumeChoice");
//               }}
//               className="group relative bg-white rounded-2xl shadow-md border border-peach-50 overflow-hidden hover:shadow-2xl hover:shadow-peach-100 transition-all transform hover:-translate-y-2 cursor-pointer"
//             >

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-peach-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
//                 <span className="bg-white text-peach-500 font-bold px-8 py-3 rounded-full shadow-xl">
//                   Use This Template
//                 </span>
//               </div>

//               {/* Real Template Preview */}
//               <div className="aspect-[3/4] bg-slate-50 p-4 overflow-hidden">
//                 <div className="scale-[0.45] origin-top-left pointer-events-none">
//                   <PreviewComponent data={demoData} />
//                 </div>
//               </div>

//               {/* Template Name */}
//               <div className="p-4 border-t border-slate-100">
//                 <h3 className="font-semibold text-slate-700">
//                   {template.name}
//                 </h3>
//               </div>

//             </div>
//           );
//         })}

//       </div>
//     </div>
//   );
// }

// export default TemplateGallery;



import { useState } from "react";
import { ArrowLeft, FileText, User, Sparkles, Briefcase } from "lucide-react";
import { templateList } from "../data/templateList";
import { demoData } from "../data/demoData";

function TemplateGallery({ setView, setSelectedTemplate }) {

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
        onClick={() => setView("landing")}
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
  key={cat?.name}
  onClick={() => setActiveCategory(cat?.name)}
  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition
    ${
      activeCategory === cat?.name
        ? "bg-slate-800 text-white"
        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
    }`}
>
  {cat?.icon}
  {cat?.name}
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
                setView("resumeChoice");
              }}
              className="group relative bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition flex items-center justify-center z-10">
                <span className="bg-white text-slate-800 font-semibold px-6 py-2 rounded-full shadow">
                  Use Template
                </span>
              </div>

              {/* Preview */}
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
