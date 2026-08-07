import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 px-6 md:px-12 bg-black border-t border-white/10 text-slate-500 text-sm flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10">
      <p className="font-bold tracking-wide">© {new Date().getFullYear()} Aashish Singh. All rights reserved.</p>
      
      <button 
        onClick={scrollToTop}
        className="group flex items-center gap-3 text-slate-400 hover:text-white font-bold tracking-widest uppercase transition-colors cursor-pointer"
      >
        <span>Back to Top</span>
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 transition-all shadow-[0_0_20px_rgba(249,115,22,0)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]">
          <ArrowUp size={18} />
        </div>
      </button>
    </footer>
  );
};

export default Footer;
