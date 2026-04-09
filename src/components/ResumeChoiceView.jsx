import { ArrowLeft, UploadCloud, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ResumeChoiceView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-50 via-white to-peach-100 flex items-center justify-center px-6 py-16">

      <div className="max-w-6xl w-full text-center">

        {/* Back Button */}
        <button
          onClick={() => navigate("/templates")}
          className="flex items-center gap-2 text-slate-500 hover:text-peach-500 font-semibold mb-12 transition"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-14">
          How will you make your resume?
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {/* Upload */}
          <div
            onClick={() => navigate("/upload")}
            className="group border-2 border-peach-100 rounded-3xl p-10 bg-white shadow-md hover:shadow-xl transition cursor-pointer"
          >
            <UploadCloud className="mx-auto text-peach-500 mb-6" size={48} />
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              I already have a resume
            </h3>
            <p className="text-slate-500 font-medium">
              Upload your existing resume to make quick edits
            </p>
          </div>

          {/* Scratch */}
          <div
            onClick={() => navigate("/editor")}
            className="group border-2 border-peach-100 rounded-3xl p-10 bg-white shadow-md hover:shadow-xl transition cursor-pointer"
          >
            <Sparkles className="mx-auto text-peach-500 mb-6" size={48} />
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