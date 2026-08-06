import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-6 md:px-12 bg-white border-t border-orange-100 text-slate-600 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="font-medium">© {new Date().getFullYear()} Aashish Singh. All rights reserved.</p>
      <button 
        onClick={scrollToTop}
        className="flex items-center gap-2 text-slate-700 hover:text-orange-600 font-bold transition-colors cursor-pointer"
      >
        <span>Back to Top</span>
        <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 shadow-sm">
          <ArrowUp size={16} />
        </div>
      </button>
    </footer>
  );
};

export default Footer;
