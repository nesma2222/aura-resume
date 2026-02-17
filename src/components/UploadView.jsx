import { UploadCloud, ArrowLeft } from 'lucide-react';

function UploadView({ onBack }) {

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      console.log(file);
      alert(`Selected file: ${file.name}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-12 py-12">

      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-peach-500 font-bold mb-12"
      >
        <ArrowLeft size={20} />
        Go Back
      </button>

      <div className="max-w-4xl mx-auto">

        <div className="bg-white border-2 border-dashed border-peach-200 rounded-[40px] p-20 text-center shadow-xl flex flex-col items-center">

          <UploadCloud size={48} className="text-peach-500 mb-8" />

          <h2 className="text-3xl font-black text-slate-800 mb-4">
            Upload Resume
          </h2>

          {/* Hidden Input */}
          <input
            type="file"
            id="resumeUpload"
            className="hidden"
            accept=".pdf,.docx,.html,.txt"
            onChange={handleFileUpload}
          />

          {/* Upload Button */}
          <label
            htmlFor="resumeUpload"
            className="cursor-pointer bg-peach-500 text-white px-10 py-4 rounded-xl font-bold hover:bg-peach-600 transition"
          >
            Upload from device
          </label>

        </div>

      </div>
    </div>
  );
}

export default UploadView;
