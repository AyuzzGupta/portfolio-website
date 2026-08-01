import { useEffect, useState, useRef } from 'react';
import { FileText, Mail, ArrowDown } from 'lucide-react';
import certificatesData from '../config/certificates.json';

function Typewriter({ text, delay, speed = 50, className, cursor = true }) {
  const [displayText, setDisplayText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setIsFinished(true);
      }
    }, speed);
    
    return () => clearInterval(interval);
  }, [text, speed, hasStarted]);

  return (
    <span className={className}>
      {displayText}
      {cursor && !isFinished && <span className="animate-pulse border-r-2 border-accent ml-1"></span>}
    </span>
  );
}

function CountUpNumber({ target, duration, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end) || end <= 0) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return (
    <span ref={elementRef} className="font-display text-3xl lg:text-4xl font-bold text-white tracking-tight">
      {hasStarted ? count : 0}{suffix}
    </span>
  );
}

export default function Hero() {
  const [leetcodeSolvedCount, setLeetcodeSolvedCount] = useState(48);

  useEffect(() => {
    async function fetchLiveLeetCode() {
      try {
        const res = await fetch('https://alfa-leetcode-api.onrender.com/userProfile/AyuzzGupta');
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.totalSolved === 'number') {
            setLeetcodeSolvedCount(data.totalSolved);
          }
        }
      } catch (err) {
        console.warn('Could not fetch live LeetCode stats for Hero:', err);
      }
    }
    fetchLiveLeetCode();
  }, []);

  const scrollToPortfolio = (e) => {
    e.preventDefault();
    const target = document.querySelector('#portfolio');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCertificates = certificatesData.length;

  return (
    <section id="home" className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 lg:py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      
      {/* Background Dot Grid for subtle texture */}
      <div className="absolute inset-0 dot-grid opacity-[0.12] pointer-events-none -z-10" />

      {/* Main Asymmetric Content Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto w-full">
        
        {/* Left column - Introduction & Brand (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-display text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in-up delay-100">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping"></span>
            Available for Opportunities
          </div>

          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-4 text-white">
            <Typewriter text="Ayush Gupta" delay={200} speed={80} />
          </h1>

          <h2 className="font-display text-2xl md:text-3xl text-accent font-semibold tracking-wide mb-6">
            <Typewriter text="Computer Science Undergrad" delay={1000} speed={50} />
          </h2>

          <p className="text-[#94a3b8] font-sans text-base lg:text-lg leading-relaxed max-w-xl mb-8 text-left md:text-justify min-h-[120px]">
            <Typewriter text="A B.Tech 3rd-year student and digital strategist focused on constructing robust computational systems. Specializing in Machine Learning classifiers, Full-Stack Web Development, and Cybersecurity frameworks, I combine rigorous technical reasoning with a passion for building." delay={2200} speed={15} cursor={false} />
          </p>

          {/* Inline Stats Block (Real-time synchronized stats) */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 border-y border-white/5 py-6 w-full max-w-xl mb-8 animate-fade-in-up delay-500">
            <div>
              <div className="flex items-baseline gap-0.5">
                <CountUpNumber key={leetcodeSolvedCount} target={leetcodeSolvedCount} duration={1000} />
              </div>
              <div className="text-[#64748b] text-xs font-sans mt-1">LeetCode Solved</div>
            </div>
            <div>
              <div className="flex items-baseline gap-0.5">
                <CountUpNumber target="4" duration={800} suffix="+" />
              </div>
              <div className="text-[#64748b] text-xs font-sans mt-1">Projects Built</div>
            </div>
            <div>
              <div className="flex items-baseline gap-0.5">
                <CountUpNumber target={totalCertificates} duration={600} />
              </div>
              <div className="text-[#64748b] text-xs font-sans mt-1">Certifications</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-in-up delay-600">
            <a
              href="/Ayush_Gupta_Resume.pdf"
              download="Ayush Gupta.pdf"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-black font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#00d8e6] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
            >
              <FileText size={16} />
              <span>Download CV</span>
            </a>
            <a
              href="mailto:workweb.ayush@gmail.com"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:border-white/30"
            >
              <Mail size={16} className="text-accent" />
              <span>Get in Touch</span>
            </a>
          </div>

        </div>

        {/* Right column - Styled Profile Image (5 cols) */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="relative w-full max-w-sm md:max-w-md aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-[0_0_40px_rgba(0,240,255,0.02)] group hover:border-accent/40 hover:shadow-[0_0_50px_rgba(0,240,255,0.12)] transition-all duration-500 animate-fade-in-up delay-300">
            {/* The Image */}
            <img 
              src="/ayush_profile.jpeg" 
              alt="Ayush Gupta Portrait" 
              className="w-full h-full object-cover filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700 ease-out"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020205]/65 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <a 
          href="#portfolio" 
          onClick={scrollToPortfolio}
          className="flex flex-col items-center gap-1 text-xs font-display tracking-widest text-[#94a3b8]"
        >
          <span>SCROLL DOWN</span>
          <ArrowDown size={14} className="animate-bounce mt-1 text-accent" />
        </a>
      </div>

    </section>
  );
}
