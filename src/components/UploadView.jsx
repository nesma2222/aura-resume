import { UploadCloud, ArrowLeft, FileType } from 'lucide-react';

function UploadView({ onBack }) {
  return (
    <div className="max-w-7xl mx-auto px-12 py-12 animate-in fade-in zoom-in-95 duration-500">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-peach-500 font-bold mb-12 transition group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
        Go Back
      </button>

      {/* Main Upload Container */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-2 border-dashed border-peach-200 rounded-[40px] p-20 text-center shadow-xl shadow-peach-100/50 flex flex-col items-center group hover:border-peach-400 transition-colors">
          
          {/* Icon Area */}
          <div className="w-24 h-24 bg-peach-50 rounded-3xl flex items-center justify-center text-peach-500 mb-8 group-hover:scale-110 transition-transform duration-500">
            <UploadCloud size={48} />
          </div>

          <h2 className="text-3xl font-black text-slate-800 mb-4">
            Drag and drop your resume here
          </h2>
          
          <p className="text-slate-400 font-medium mb-10">or</p>

          <button className="bg-peach-500 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-lg shadow-peach-200 hover:bg-peach-600 hover:-translate-y-1 transition-all active:scale-95">
            Upload from device
          </button>

          {/* Supported Files Label */}
          <div className="mt-12 flex items-center gap-3 text-slate-400">
            <span className="text-sm font-bold uppercase tracking-widest">Files we can read:</span>
            <div className="flex gap-2">
              {['DOCX', 'PDF', 'HTML', 'TXT'].map((ext) => (
                <span key={ext} className="bg-slate-50 px-3 py-1 rounded-md text-xs font-bold border border-slate-100">
                  {ext}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Security Note */}
        <p className="text-center mt-8 text-slate-400 text-sm flex items-center justify-center gap-2">
           🔒 Your data is encrypted and secure.
        </p>
      </div>
    </div>
  );
}