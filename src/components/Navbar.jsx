import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'LeetCode', href: '#leetcode' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Connect', href: '#connect' },
  ];

  // Smooth scroll and section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 200; // offset for detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 w-full z-50 backdrop-blur-lg bg-[#020205]/70 border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Name */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, '#home')}
          className="font-display font-bold text-lg tracking-wider text-white hover:opacity-80 transition-opacity duration-300 flex items-center"
        >
          <img src="/logo.svg" alt="AG Logo" className="h-10 w-10" />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`font-display text-sm tracking-wide transition-all duration-300 relative py-1 ${
                activeSection === link.href.substring(1)
                  ? 'text-accent font-medium'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_8px_#00f0ff] transition-all duration-300" />
              )}
            </a>
          ))}
        </div>

        {/* Download CV (Desktop) */}
        <div className="hidden lg:flex items-center">
          <a
            href="/Ayush_Gupta_Resume.pdf"
            download="Ayush Gupta.pdf"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 hover:bg-accent/15 text-accent font-display text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:border-accent"
          >
            <span>Download CV</span>
            <ArrowUpRight size={14} className="opacity-80" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#94a3b8] hover:text-white transition-colors p-2"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Nav Dropdown */}
      <div 
        className={`lg:hidden fixed left-0 right-0 top-[80px] bg-[#020205]/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 py-8 gap-6 max-h-[calc(100vh-80px)] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`font-display text-base tracking-wide py-1 border-b border-white/5 ${
                activeSection === link.href.substring(1)
                  ? 'text-accent font-semibold'
                  : 'text-[#94a3b8]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Ayush_Gupta_Resume.pdf"
            download="Ayush Gupta.pdf"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 mt-4 px-6 py-3 rounded-xl border border-accent/40 bg-accent/10 text-accent font-display text-sm font-semibold tracking-wider uppercase hover:bg-accent/20 transition-all duration-300"
          >
            <span>Download CV</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
}
