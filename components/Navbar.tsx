
import React from 'react';
import { RESUME_DATA } from '../constants';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Connect', href: '#connect' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-4 bg-[#0f1419]/80 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <span className="font-heading font-bold text-xl tracking-tight">
            {RESUME_DATA.github.split('/').pop()}.dev
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-sm rounded-lg transition-all transform hover:scale-105 active:scale-95">
          Download CV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
