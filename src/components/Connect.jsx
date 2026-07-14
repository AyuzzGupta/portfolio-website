import { Mail, Phone, ArrowUp, Send } from 'lucide-react';

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Connect() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ayush-gupta2404",
      icon: <LinkedinIcon size={20} />,
      label: "linkedin.com/in/ayush-gupta2404"
    },
    {
      name: "GitHub",
      href: "https://github.com/AyuzzGupta",
      icon: <GithubIcon size={20} />,
      label: "github.com/AyuzzGupta"
    },
    {
      name: "Email",
      href: "mailto:workweb.ayush@gmail.com",
      icon: <Mail size={20} />,
      label: "workweb.ayush@gmail.com"
    }
  ];


  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="connect" className="py-20 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.05] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        
        {/* Main CTA Section (Asymmetric) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5 items-start">
          
          {/* Left Side: Call to action (7 cols) */}
          <div className="lg:col-span-7 text-left">
            <div className="text-accent font-display text-xs font-semibold tracking-widest uppercase mb-3">Connect</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6">
              Let's Build Something
            </h2>
            <p className="text-[#94a3b8] font-sans text-base leading-relaxed max-w-xl mb-8">
              Open to technical internships, software engineering roles, and startup collaborations. Shoot me an email or connect with me via LinkedIn. Let's discuss system architecture, ML models, or green technology.
            </p>

            <a
              href="mailto:workweb.ayush@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-black font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#00d8e6] hover:shadow-[0_0_25px_rgba(0,240,255,0.3)]"
            >
              <Send size={16} />
              <span>Send Message</span>
            </a>
          </div>

          {/* Right Side: Direct Contacts Grid (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full text-left">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="p-4 rounded-xl border border-white/5 bg-[#07080f]/50 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-[#64748b] group-hover:text-accent group-hover:border-accent/20 transition-all duration-300">
                  {link.icon}
                </div>
                <div>
                  <div className="text-[#64748b] text-[9px] font-display uppercase tracking-widest mb-0.5">{link.name}</div>
                  <div className="text-white text-sm font-sans truncate">{link.label}</div>
                </div>
              </a>
            ))}

            {/* Direct Phone Card */}
            <div className="p-4 rounded-xl border border-white/5 bg-[#07080f]/50 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-[#64748b]">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-[#64748b] text-[9px] font-display uppercase tracking-widest mb-0.5">Phone</div>
                <div className="text-white text-sm font-sans">+91 9971173344</div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Sub-bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-[#64748b] text-xs font-display">
          
          <div>
            &copy; 2026 Ayush Gupta. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone size={12} /> +91 9971173344</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5"><Mail size={12} /> workweb.ayush@gmail.com</span>
          </div>

          <a
            href="#home"
            onClick={scrollToTop}
            className="flex items-center gap-1 p-2 rounded-lg border border-white/5 hover:border-accent hover:text-accent transition-all duration-300 group"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </a>

        </div>

      </div>
    </footer>
  );
}
