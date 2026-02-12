import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle, ArrowLeft, UploadCloud, 
  MousePointer2, Edit3, Download, Layout, User, 
  FileText, Briefcase, Camera 
} from 'lucide-react';
import TestimonialsSection from "./components/TestimonialsSection";

// --- SUB-COMPONENTS ---

// 1. The Steps Section (Matches Screenshot 5)
function StepsSection() {
  const steps = [
    {
      id: "STEP 1",
      title: "Choose a stylish template",
      desc: "Select one of the recruiter-approved CV templates designed specifically to always make it past the screening stage.",
      icon: <MousePointer2 className="text-peach-500" size={24} />,
    },
    {
      id: "STEP 2",
      title: "Customize each CV section",
      desc: "Add details about your experience, education, and skills with one click. Need more sections? We've got plenty.",
      icon: <Edit3 className="text-peach-500" size={24} />,
    },
    {
      id: "STEP 3",
      title: "Download your CV in seconds",
      desc: "You've saved hours on CV creation—now use that extra time to prepare for job interviews and shine on them.",
      icon: <Download className="text-peach-500" size={24} />,
    }
  ];

  return (
    <section className="bg-white py-24 border-t border-peach-50">
      <div className="max-w-7xl mx-auto px-12 flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 relative h-[400px] flex items-center justify-center">
          <div className="absolute w-64 h-80 bg-peach-50 rounded-2xl border border-peach-100 transform -rotate-6 z-0 shadow-sm"></div>
          <div className="absolute w-64 h-80 bg-white rounded-2xl border border-slate-100 shadow-xl z-10 p-6 flex flex-col gap-3">
             <div className="h-4 w-1/2 bg-slate-100 rounded"></div>
             <div className="h-2 w-full bg-slate-50 rounded"></div>
             <div className="h-2 w-full bg-slate-50 rounded"></div>
             <div className="h-2 w-3/4 bg-slate-50 rounded"></div>
          </div>
        </div>
        <div className="lg:w-1/2 space-y-10">
          <h2 className="text-5xl font-black text-slate-800 leading-tight">
            Create your job-winning CV in <br />
            <span className="text-peach-500 text-6xl">3 simple steps</span>
          </h2>
          <div className="space-y-8 relative">
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-peach-100 -z-10"></div>
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 group">
                <div className="w-12 h-12 bg-white border-2 border-peach-100 rounded-xl flex items-center justify-center shadow-sm group-hover:border-peach-500 transition-colors shrink-0">
                  {step.icon}
                </div>
                <div>
                  <p className="text-peach-400 font-bold text-xs tracking-widest mb-1">{step.id}</p>
                  <h3 className="text-2xl font-black text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 2. The Upload View (Matches your "Improve" screenshot)
function UploadView({ onBack }) {
  return (
    <div className="max-w-7xl mx-auto px-12 py-12 animate-in fade-in zoom-in-95 duration-500">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-peach-500 font-bold mb-12 transition">
        <ArrowLeft size={20} /> Go Back
      </button>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-2 border-dashed border-peach-200 rounded-[40px] p-20 text-center shadow-xl shadow-peach-100/50 flex flex-col items-center group hover:border-peach-400 transition-colors">
          <div className="w-20 h-20 bg-peach-50 rounded-2xl flex items-center justify-center text-peach-500 mb-8">
            <UploadCloud size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-800 mb-4">Drag and drop your resume here</h2>
          <p className="text-slate-400 font-medium mb-10 text-lg">or</p>
          <button className="bg-peach-500 text-white px-12 py-4 rounded-2xl font-black text-xl shadow-lg hover:bg-peach-600 transition-all">
            Upload from device
          </button>
          <p className="mt-12 text-slate-400 font-bold text-sm uppercase tracking-widest">Files we can read: DOCX, PDF, HTML, TXT</p>
        </div>
      </div>
    </div>
  );
}

// --- MAIN APP ---

export default function App() {
  const [view, setView] = useState('landing'); 

  const Navbar = () => (
    <nav className="flex justify-between items-center px-12 py-6 bg-white border-b border-peach-100 sticky top-0 z-50">
      <div className="flex items-center gap-2 font-bold text-2xl cursor-pointer" onClick={() => setView('landing')}>
        <div className="bg-peach-500 p-1.5 rounded-lg text-white"><Sparkles size={24} /></div>
        <span>Aura<span className="text-peach-500">Resume</span></span>
      </div>
      <button onClick={() => setView('templates')} className="border-2 border-peach-500 text-peach-500 font-bold px-6 py-2 rounded-xl">
        Build My CV
      </button>
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#fffaf9] font-sans text-slate-900">
      <Navbar />

      {/* LANDING VIEW */}
      {view === 'landing' && (
        <>
          <main className="max-w-7xl mx-auto px-12 py-20 flex flex-col lg:flex-row items-center gap-16 animate-in fade-in duration-500">
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                48,802 resumes created today
              </div>
              <h1 className="text-7xl font-extrabold leading-tight">
                Create your CV with an <br />
                <span className="text-peach-500">AI-powered</span> CV maker
              </h1>
              <p className="text-xl text-slate-500 max-w-lg leading-relaxed">
                The first step to a better job? A better CV. Only 2% of CVs win, and yours will be one of them. Build it now!
              </p>
              <div className="flex gap-4">
                <button onClick={() => setView('templates')} className="bg-peach-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-peach-600 transition">
                  Create a New CV
                </button>
                <button onClick={() => setView('upload')} className="border-2 border-peach-400 text-peach-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white transition">
                  Improve My Resume
                </button>
              </div>
              <div className="flex gap-12 pt-10 border-t border-slate-100">
                <div>
                  <p className="text-3xl font-bold text-green-500">48%</p>
                  <p className="text-slate-400 text-sm">more likely to get hired</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-400">12%</p>
                  <p className="text-slate-400 text-sm">better pay with your next job</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-white p-6 rounded-2xl shadow-2xl border border-peach-100 transform rotate-2 relative z-10">
                <div className="w-full aspect-[3/4] bg-slate-50 rounded-lg p-6 space-y-4">
                   <div className="flex items-center gap-4 border-b pb-4">
                     <div className="w-12 h-12 bg-peach-200 rounded-full"></div>
                     <div className="h-4 w-32 bg-slate-200 rounded"></div>
                   </div>
                   <div className="space-y-2 pt-4">
                     <div className="h-2 w-full bg-slate-100 rounded"></div>
                     <div className="h-2 w-full bg-slate-100 rounded"></div>
                   </div>
                </div>
              </div>
              <div className="absolute top-1/2 -right-10 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200 shadow-sm font-bold z-20 flex items-center gap-2">
                <CheckCircle size={14} /> ATS Perfect
              </div>
            </div>
          </main>
          <StepsSection />
          <TestimonialsSection />
        </>
      )}

      {/* UPLOAD VIEW */}
      {view === 'upload' && <UploadView onBack={() => setView('landing')} />}

      {/* TEMPLATE GALLERY VIEW */}
      {view === 'templates' && (
        <div className="max-w-7xl mx-auto px-12 py-12 animate-in slide-in-from-bottom-4 duration-500">
          <button onClick={() => setView('landing')} className="flex items-center gap-2 text-slate-400 font-bold mb-8 transition"><ArrowLeft size={20} /> Back</button>
          
          <div className="flex justify-center items-center gap-4 mb-12 text-sm font-medium text-slate-400">
            <span className="flex items-center gap-2 text-peach-500"><span className="w-6 h-6 rounded-full bg-peach-500 text-white flex items-center justify-center text-xs">1</span> Choose template</span>
            <div className="w-12 h-[1px] bg-slate-200"></div>
            <span className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs">2</span> Enter details</span>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-6xl font-black text-slate-800 mb-4">Resume templates</h2>
            <p className="text-slate-500 text-xl">Ready in minutes — <span className="text-peach-500 italic">try it for free!</span></p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((t) => (
              <div key={t} onClick={() => setView('editor')} className="group relative bg-white rounded-3xl shadow-md border border-peach-50 overflow-hidden hover:shadow-2xl transition-all cursor-pointer">
                <div className="absolute inset-0 bg-peach-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <span className="bg-white text-peach-500 font-bold px-8 py-3 rounded-full shadow-lg">Use Template</span>
                </div>
                <div className="aspect-[3/4] bg-slate-50 p-8">
                   <div className="w-full h-full bg-white shadow-sm rounded border-t-4 border-peach-400"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* EDITOR VIEW */}
      {view === 'editor' && (
        <div className="max-w-7xl mx-auto px-12 py-20 text-center animate-in zoom-in-95">
          <h2 className="text-4xl font-black mb-4">Step 2: Customizing Your CV</h2>
          <button onClick={() => setView('templates')} className="text-peach-500 underline font-bold">Back to templates</button>
        </div>
      )}
    </div>
  );
}