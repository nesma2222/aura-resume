import { FileText } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white border-b border-peach-100">
      <div className="flex items-center gap-2 text-peach-500 font-bold text-2xl">
        <FileText size={32} />
        <span>PeachyCV</span>
      </div>
      <button className="border-2 border-peach-500 text-peach-500 px-6 py-2 rounded-lg font-semibold hover:bg-peach-50 transition">
        Build My CV
      </button>
    </nav>
  );
}