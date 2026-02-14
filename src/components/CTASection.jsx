export default function CTASection() {
  return (
    <section className="bg-gradient-to-b from-peach-50 to-rose-50 py-24 relative overflow-hidden">
      
      {/* Aura Glow Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-peach-300 rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-rose-300 rounded-full blur-[120px] opacity-30"></div>

      <div className="max-w-6xl mx-auto px-8 relative">
        
        {/* CTA Card */}
        <div className="bg-white/80 backdrop-blur-lg border border-peach-100 rounded-3xl p-16 text-center shadow-xl">

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
            Get noticed, get hired faster 
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Build a professional resume with AuraResume and stand out with
            confidence. Your dream job starts with a powerful first impression.
          </p>

          <button className="bg-gradient-to-r from-peach-400 to-rose-400 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-peach-200 transition active:scale-95">
            Land Your Dream Job
          </button>

        </div>

      </div>

    </section>
  );
}
