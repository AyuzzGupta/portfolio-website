
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { RESUME_DATA } from '../constants';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = (anime as any).timeline({
      easing: 'easeOutExpo',
    });

    timeline
      .add({
        targets: titleRef.current,
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 1200,
        delay: 200
      })
      .add({
        targets: subtitleRef.current,
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 1000
      }, '-=1000')
      .add({
        targets: bioRef.current,
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 1000
      }, '-=800')
      .add({
        targets: statsRef.current,
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 1000
      }, '-=800')
      .add({
        targets: ctaRef.current,
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 1000
      }, '-=800');

    (anime as any)({
      targets: '.bg-particle',
      translateY: () => anime.random(-50, 50),
      translateX: () => anime.random(-50, 50),
      duration: () => anime.random(5000, 8000),
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
  }, []);

  return (
    <div className="relative min-h-[70vh] flex flex-col justify-center py-12">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] bg-particle"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px] bg-particle"></div>

      <div className="max-w-4xl z-10 space-y-10">
        <div ref={subtitleRef} className="flex items-center gap-4 text-cyan-400 font-mono tracking-[0.2em] text-sm uppercase">
          <span className="w-12 h-px bg-cyan-500/50"></span>
          <span>{RESUME_DATA.title}</span>
        </div>
        
        <div className="space-y-4">
          <h1 ref={titleRef} className="text-7xl md:text-9xl font-bold leading-none tracking-tighter">
            Ayush <br />
            <span className="gradient-text">Gupta</span>
          </h1>
          <p className="text-xl font-medium text-slate-300 font-heading">
            Student at <span className="text-white border-b border-cyan-500/50">Inderprastha Engineering College</span>
          </p>
        </div>

        <p ref={bioRef} className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-light">
          {RESUME_DATA.bio}
        </p>

        <div ref={statsRef} className="flex flex-wrap gap-12 items-center">
          <div className="space-y-1">
            <span className="text-5xl font-bold text-white block">20+</span>
            <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">Repositories</span>
          </div>
          <div className="w-px h-16 bg-white/5 hidden sm:block"></div>
          <div className="space-y-1">
            <span className="text-5xl font-bold text-white block">5+</span>
            <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">Major Projects</span>
          </div>
          <div className="w-px h-16 bg-white/5 hidden sm:block"></div>
          <div className="space-y-1">
            <span className="text-5xl font-bold text-white block">80%</span>
            <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">ML Accuracy</span>
          </div>
        </div>

        <div ref={ctaRef} className="flex flex-wrap gap-5 pt-4">
          <a 
            href="#connect" 
            className="px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl transition-all hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] flex items-center gap-3"
          >
            Start a Conversation
            <Mail size={18} />
          </a>
          <div className="flex gap-3">
            <a 
              href={`https://${RESUME_DATA.github}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-5 border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-slate-400 hover:text-white"
              title="GitHub"
            >
               <Github size={24} />
            </a>
            <a 
              href={`https://${RESUME_DATA.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-5 border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-slate-400 hover:text-white"
              title="LinkedIn"
            >
               <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
