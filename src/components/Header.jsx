import { Sun } from 'lucide-react';

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative">
          {/* Subtle "Aura" Glow behind the icon */}
          <div className="absolute inset-0 bg-peach-400 blur-lg opacity-40 group-hover:opacity-70 transition-opacity"></div>
          <div className="relative bg-gradient-to-br from-peach-400 to-rose-400 p-2.5 rounded-xl text-white shadow-lg">
            <Sun size={24} strokeWidth={2.5} />
          </div>
        </div>
        <span className="text-2xl font-black tracking-tight text-slate-800">
          Aura<span className="text-peach-500">Resume</span>
        </span>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="text-slate-500 font-medium hover:text-peach-500 transition">Log In</button>
        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-xl hover:shadow-peach-100 transition-all active:scale-95">
          Get Started
        </button>
      </div>
    </nav>
  );
}