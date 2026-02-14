import React, { useState } from 'react';
import {
  Sparkles, CheckCircle,
  MousePointer2, Edit3, Download
} from 'lucide-react';

import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import ResumeChoiceView from "./components/ResumeChoiceView";
import TemplateGallery from "./components/TemplateGallery";
import Footer from "./components/Footer";
import UploadView from './components/UploadView';


/* ---------------- STEPS SECTION ---------------- */

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
      desc: "Add details about your experience, education, and skills with one click.",
      icon: <Edit3 className="text-peach-500" size={24} />,
    },
    {
      id: "STEP 3",
      title: "Download your CV in seconds",
      desc: "Save time and prepare for interviews confidently.",
      icon: <Download className="text-peach-500" size={24} />,
    }
  ];

  return (
    <section className="bg-white py-24 border-t border-peach-50">
      <div className="max-w-7xl mx-auto px-12 flex flex-col lg:flex-row items-center gap-20">

        <div className="lg:w-1/2 relative h-[400px] flex items-center justify-center">
          <div className="absolute w-64 h-80 bg-peach-50 rounded-2xl border border-peach-100 transform -rotate-6 shadow-sm"></div>

          <div className="absolute w-64 h-80 bg-white rounded-2xl border border-slate-100 shadow-xl p-6 flex flex-col gap-3">
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

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 group">

                <div className="w-12 h-12 bg-white border-2 border-peach-100 rounded-xl flex items-center justify-center shadow-sm group-hover:border-peach-500 transition-colors">
                  {step.icon}
                </div>

                <div>
                  <p className="text-peach-400 font-bold text-xs tracking-widest mb-1">{step.id}</p>
                  <h3 className="text-2xl font-black text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-500">{step.desc}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}


/* ---------------- MAIN APP ---------------- */

export default function App() {

  const [view, setView] = useState('landing');

  const Navbar = () => (
    <nav className="flex justify-between items-center px-12 py-6 bg-white border-b border-peach-100 sticky top-0 z-50">

      <div
        className="flex items-center gap-2 font-bold text-2xl cursor-pointer"
        onClick={() => setView('landing')}
      >
        <div className="bg-peach-500 p-1.5 rounded-lg text-white">
          <Sparkles size={24} />
        </div>

        <span>Aura<span className="text-peach-500">Resume</span></span>
      </div>

      <button
        onClick={() => setView('templates')}
        className="border-2 border-peach-500 text-peach-500 font-bold px-6 py-2 rounded-xl"
      >
        Build My CV
      </button>

    </nav>
  );

  return (
    <div className="min-h-screen bg-[#fffaf9] font-sans text-slate-900">

      <Navbar />

      {/* -------- LANDING -------- */}
      {view === 'landing' && (
        <>
          <main className="max-w-7xl mx-auto px-12 py-20 flex flex-col lg:flex-row items-center gap-16">

            {/* LEFT */}
            <div className="lg:w-1/2 space-y-8">

              <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                48,802 resumes created today
              </div>

              <h1 className="text-7xl font-extrabold leading-tight">
                Create your CV with an <br />
                <span className="text-peach-500">AI-powered</span> CV maker
              </h1>

              <p className="text-xl text-slate-500 max-w-lg">
                The first step to a better job? A better CV.
              </p>

              <div className="flex gap-4">

                <button
                  onClick={() => setView('templates')}
                  className="bg-peach-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-peach-600 transition"
                >
                  Create a New CV
                </button>

                <button
                  onClick={() => setView('upload')}
                  className="border-2 border-peach-400 text-peach-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white transition"
                >
                  Improve My Resume
                </button>

              </div>

            </div>

            {/* RIGHT */}
            <div className="lg:w-1/2 relative">

              <div className="bg-white p-6 rounded-2xl shadow-2xl border border-peach-100 transform rotate-2">
                <div className="w-full aspect-[3/4] bg-slate-50 rounded-lg p-6"></div>
              </div>

              <div className="absolute top-1/2 -right-10 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200 shadow-sm font-bold flex items-center gap-2">
                <CheckCircle size={14} /> ATS Perfect
              </div>

            </div>

          </main>

          <StepsSection />
          <TestimonialsSection />
          <CTASection />
          <Footer />
        </>
      )}

      {/* -------- UPLOAD -------- */}
      {view === 'upload' && (
        <UploadView onBack={() => setView('landing')} />
      )}

      {/* -------- TEMPLATE GALLERY -------- */}
      {view === 'templates' && (
        <TemplateGallery setView={setView} />
      )}

      {/* -------- RESUME CHOICE -------- */}
      {view === 'resumeChoice' && (
        <ResumeChoiceView
          onUpload={() => setView("upload")}
          onScratch={() => setView("editor")}
          onBack={() => setView("templates")}
        />
      )}

      {/* -------- EDITOR -------- */}
      {view === 'editor' && (
        <div className="max-w-7xl mx-auto px-12 py-20 text-center">
          <h2 className="text-4xl font-black mb-4">
            Step 2: Customizing Your CV
          </h2>

          <button
            onClick={() => setView('templates')}
            className="text-peach-500 underline font-bold"
          >
            Back to templates
          </button>
        </div>
      )}

    </div>
  );
}
