export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-28">
      {/* Background Aura Blobs */}
      <div className="absolute top-0 right-0 -mr-20 w-96 h-96 bg-peach-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 w-80 h-80 bg-rose-50 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-block bg-white border border-peach-100 px-4 py-1.5 rounded-full shadow-sm">
            <p className="text-sm font-bold text-peach-600">✨ Trusted by 50k+ Job Seekers</p>
          </div>
          
          <h1 className="text-7xl font-extrabold text-slate-900 leading-[1.05]">
            Land your dream job with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach-500 to-rose-500">
              Confidence.
            </span>
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-md">
            AuraResume uses AI to polish your experience and match you with the aesthetics top recruiters love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-peach-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-peach-200 hover:bg-peach-600 transition-all hover:-translate-y-1">
              Create My Resume
            </button>
            <button className="bg-white border-2 border-slate-100 px-10 py-5 rounded-2xl font-bold text-lg text-slate-700 hover:border-peach-200 transition-all">
              View Templates
            </button>
          </div>
        </div>

        {/* Visual Preview */}
        <div className="relative">
          <div className="bg-white rounded-3xl p-4 shadow-2xl border border-peach-50 transform rotate-2">
             <div className="bg-peach-50 aspect-[3/4] rounded-2xl border-2 border-dashed border-peach-200 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4 text-peach-400">
                    <Sun size={32} />
                </div>
                <h3 className="font-bold text-slate-800">Your Future Header</h3>
                <div className="w-full h-2 bg-white rounded-full mt-4"></div>
                <div className="w-2/3 h-2 bg-white rounded-full mt-2"></div>
             </div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -top-6 -right-6 bg-rose-500 text-white p-6 rounded-2xl shadow-2xl rotate-12">
             <p className="text-xs font-bold uppercase tracking-tighter">ATS Score</p>
             <p className="text-3xl font-black">98%</p>
          </div>
        </div>
      </div>
    </section>
  );
}