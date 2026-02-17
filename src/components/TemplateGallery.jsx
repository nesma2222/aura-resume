import { FileText, User, Sparkles, Briefcase, Camera } from "lucide-react";

function TemplateGallery({ setView }) {
  const categories = [
    { name: "All Templates", icon: <FileText size={18} /> },
    { name: "Simple", icon: <User size={18} /> },
    { name: "Modern", icon: <Sparkles size={18} /> },
    { name: "Professional", icon: <Briefcase size={18} /> },
    { name: "With photo", icon: <Camera size={18} /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-12 py-12 animate-in fade-in duration-500">

      {/* Step Indicator */}
      <div className="flex justify-center items-center gap-4 mb-12 text-sm font-medium text-slate-400">
        <span className="flex items-center gap-2 text-peach-500">
          <span className="w-6 h-6 rounded-full bg-peach-500 text-white flex items-center justify-center text-xs">
            1
          </span>
          Choose template
        </span>

        <div className="w-12 h-[1px] bg-slate-200"></div>

        <span className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs">
            2
          </span>
          Enter details
        </span>

        <div className="w-12 h-[1px] bg-slate-200"></div>

        <span className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs">
            3
          </span>
          Download resume
        </span>
      </div>

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-slate-800 mb-4">
          Resume templates
        </h2>
        <p className="text-slate-500 text-lg">
          Simple to use and ready in minutes —
          <span className="text-peach-500 font-semibold italic">
            {" "}give it a try for free now!
          </span>
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-peach-100 pb-4">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all ${
              i === 0
                ? "bg-peach-500 text-white shadow-lg shadow-peach-200"
                : "text-slate-500 hover:bg-peach-50 hover:text-peach-500"
            }`}
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            onClick={() => setView("resumeChoice")}
            className="group relative bg-white rounded-2xl shadow-md border border-peach-50 overflow-hidden hover:shadow-2xl hover:shadow-peach-100 transition-all transform hover:-translate-y-2 cursor-pointer"
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-peach-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
              <span className="bg-white text-peach-500 font-bold px-8 py-3 rounded-full shadow-xl">
                Use This Template
              </span>
            </div>

            {/* Template Preview */}
            <div className="aspect-[3/4] p-8 bg-slate-50">
              <div className="w-full h-full bg-white shadow-sm rounded border border-slate-100 p-4 space-y-3">
                <div className="w-1/2 h-4 bg-peach-100 rounded"></div>
                <div className="w-full h-2 bg-slate-100 rounded"></div>
                <div className="w-full h-2 bg-slate-100 rounded"></div>

                <div className="pt-4 space-y-2">
                  <div className="w-1/3 h-3 bg-peach-50 rounded"></div>
                  <div className="w-full h-2 bg-slate-50 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default TemplateGallery;
