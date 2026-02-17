import React, { useState } from 'react';
import {
  Sparkles, MousePointer2, Edit3, Download
} from 'lucide-react';

import ResumeChoiceView from "./components/ResumeChoiceView";
import TemplateGallery from "./components/TemplateGallery";
import UploadView from './components/UploadView';
import EditorPage from "./components/editor/EditorPage";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

import TemplateOne from "./templates/TemplateOne";
import TemplateTwo from "./templates/TemplateTwo";

// Import your webp resume preview image
import ResumePreview from './assets/resumepreview.webp';

/* ---------------- PROFESSIONAL LANDING HERO ---------------- */
function LandingHero({ setView }) {
  const resumesCreated = 51863;
  const moreLikelyHired = 48;
  const betterPay = 12;

  return (
    <section className="bg-[#f1eae2] py-20">
      <div className="max-w-7xl mx-auto px-12 flex lg:flex-row flex-col gap-16 items-center">

        {/* LEFT: Text */}
        <div className="lg:w-1/2 space-y-8">
          <p className="text-[#FF9F7F] font-bold">{resumesCreated.toLocaleString()} resumes created today</p>

          <h1 className="text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
            Create your <span className="text-[#FF7F50]">job-winning resume</span> in minutes
          </h1>

          <p className="text-slate-700 text-lg">
            The first step to a better job? A better resume. Get yours in just a few clicks.
          </p>

          <div className="flex gap-6 mt-6">
            <button
              onClick={() => setView('templates')}
              className="bg-[#FF7F50] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#FF6A33] transition"
            >
              Create New Resume
            </button>

            <button
              onClick={() => setView('upload')}
              className="border-2 border-[#FF7F50] text-[#FF7F50] px-10 py-4 rounded-xl font-bold hover:bg-[#FFDAB3] transition"
            >
              Improve My Resume
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-10">
            <div>
              <p className="text-[#FF9F7F] font-bold text-xl">{moreLikelyHired}%</p>
              <p className="text-slate-600">more likely to get hired</p>
            </div>

            <div>
              <p className="text-[#FFB380] font-bold text-xl">{betterPay}%</p>
              <p className="text-slate-600">better pay with your next job</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Resume Preview Image */}
      
          {/* Background shadow card */}
         
          {/* Actual resume image */}
          <div className="w-72 sm:w-80 md:w-96 lg:w-[450px] h-auto shadow-xl overflow-hidden">
            <img
              src={ResumePreview}
              alt="Resume Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

     
    </section>
  );
}

/* ---------------- STEPS SECTION ---------------- */
function StepsSection() {
  const steps = [
    { id: "STEP 1", title: "Choose a stylish template", desc: "Select one of the recruiter-approved CV templates.", icon: <MousePointer2 className="text-[#FF7F50]" size={24} /> },
    { id: "STEP 2", title: "Customize each CV section", desc: "Add experience, education, and skills easily.", icon: <Edit3 className="text-[#FF7F50]" size={24} /> },
    { id: "STEP 3", title: "Download your CV in seconds", desc: "Prepare for interviews confidently.", icon: <Download className="text-[#FF7F50]" size={24} /> },
  ];

  return (
    <section className="bg-white py-24 border-t border-[#FFDAB3]">
      <div className="max-w-7xl mx-auto px-12 flex flex-col lg:flex-row items-center gap-20">

        {/* Left side preview */}
        <div className="lg:w-1/2 relative h-[400px] flex items-center justify-center">
          <div className="absolute w-64 h-80 bg-[#FFDAB3] rounded-2xl border border-[#FFB380] transform -rotate-6 shadow-sm"></div>
          <div className="absolute w-64 h-80 bg-white rounded-2xl border border-slate-100 shadow-xl p-6 flex flex-col gap-3">
            <div className="h-4 w-1/2 bg-slate-100 rounded"></div>
            <div className="h-2 w-full bg-slate-50 rounded"></div>
            <div className="h-2 w-full bg-slate-50 rounded"></div>
            <div className="h-2 w-3/4 bg-slate-50 rounded"></div>
          </div>
        </div>

        {/* Right side steps */}
        <div className="lg:w-1/2 space-y-10">
          <h2 className="text-5xl font-black text-slate-800">
            Create your job-winning CV in <br />
            <span className="text-[#FF7F50] text-6xl">3 simple steps</span>
          </h2>

          {steps.map((step, index) => (
            <div key={index} className="flex gap-8">
              <div className="w-12 h-12 bg-white border-2 border-[#FFDAB3] rounded-xl flex items-center justify-center">
                {step.icon}
              </div>

              <div>
                <p className="text-[#FF9F7F] text-xs font-bold">{step.id}</p>
                <h3 className="text-2xl font-black">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------------- MAIN APP ---------------- */
export default function App() {
  const [view, setView] = useState('landing');
  const [selectedTemplate, setSelectedTemplate] = useState("templateOne");

  const Navbar = () => (
    <nav className="flex justify-between items-center px-12 py-6 bg-white border-b border-[#FFDAB3] sticky top-0 z-50">
      <div className="flex items-center gap-2 font-bold text-2xl cursor-pointer" onClick={() => setView('landing')}>
        <div className="bg-[#FF7F50] p-1.5 rounded-lg text-white"><Sparkles size={24} /></div>
        <span>Aura<span className="text-[#FF7F50]">Resume</span></span>
      </div>

      <button onClick={() => setView('templates')} className="border-2 border-[#FF7F50] text-[#FF7F50] font-bold px-6 py-2 rounded-xl">
        Build My CV
      </button>
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#FFE5B4] font-sans text-slate-900">
      <Navbar />

      {view === 'landing' && (
        <>
          <LandingHero setView={setView} />
          <StepsSection />
          <TestimonialsSection />
          <CTASection />
          <Footer />
        </>
      )}

      {view === 'upload' && <UploadView onBack={() => setView('landing')} />}
      {view === 'templates' && <TemplateGallery setView={setView} setSelectedTemplate={setSelectedTemplate} />}
      {view === 'resumeChoice' && <ResumeChoiceView onUpload={() => setView("upload")} onScratch={() => setView("editor")} onBack={() => setView("templates")} />}
      {view === "editor" && <EditorPage selectedTemplate={selectedTemplate} onBack={() => setView("resumeChoice")} />}
    </div>
  );
}
