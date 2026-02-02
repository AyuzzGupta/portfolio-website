
import React from 'react';
import { RESUME_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
           <span className="font-heading font-bold text-xl tracking-tight mb-2">
             Ayush Gupta
           </span>
           <p className="text-slate-500 text-sm">
             &copy; {new Date().getFullYear()} — Built with Passion and React.
           </p>
        </div>

        <div className="flex gap-8 text-sm text-slate-500">
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           <a href="#" className="hover:text-white transition-colors">Resume</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
