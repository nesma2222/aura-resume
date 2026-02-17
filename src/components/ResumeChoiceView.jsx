import { ArrowLeft, UploadCloud, Sparkles } from "lucide-react";

function ResumeChoiceView({ onUpload, onScratch, onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-50 via-white to-peach-100 flex items-center justify-center px-6 py-16">

      <div className="max-w-6xl w-full text-center animate-in fade-in duration-500">

        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-peach-500 font-semibold mb-12 transition"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-14">
          How will you make your resume?
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {/* Upload Resume Card */}
          <div
            onClick={onUpload}
            className="group border-2 border-peach-100 rounded-3xl p-10 bg-white shadow-md hover:shadow-xl hover:border-peach-400 transition duration-300 cursor-pointer"
          >
            <UploadCloud
              className="mx-auto text-peach-500 mb-6 group-hover:scale-110 transition"
              size={48}
            />

            <h3 className="text-xl font-bold text-slate-800 mb-2">
              I already have a resume
            </h3>

            <p className="text-slate-500 font-medium">
              Upload your existing resume to make quick edits
            </p>
          </div>

          {/* Start From Scratch Card */}
          <div
            onClick={onScratch}
            className="group border-2 border-peach-100 rounded-3xl p-10 bg-white shadow-md hover:shadow-xl hover:border-peach-400 transition duration-300 cursor-pointer"
          >
            <Sparkles
              className="mx-auto text-peach-500 mb-6 group-hover:scale-110 transition"
              size={48}
            />

            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Start from scratch
            </h3>

            <p className="text-slate-500 font-medium">
              Our AI will guide you through creating a resume
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ResumeChoiceView;
