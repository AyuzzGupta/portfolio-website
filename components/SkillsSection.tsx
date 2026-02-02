
import React, { useEffect, useRef } from 'react';
import { SKILLS } from '../constants';
import anime from 'animejs';

const SkillsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Fix: Cast anime to any to resolve "not callable" type error appearing in some ESM environments
          (anime as any)({
            targets: '.skill-bar',
            width: (el: HTMLElement) => el.getAttribute('data-level') + '%',
            easing: 'easeOutQuart',
            duration: 1500,
            delay: anime.stagger(100)
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold">Tech stack</h2>
          <p className="text-slate-400 max-w-md">
            Continuously learning and refining my skills in software architecture and modern web technologies.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono">Frontend</div>
          <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono">Backend</div>
          <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono">Algorithms</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="font-bold text-slate-200">{skill.name}</span>
              <span className="font-mono text-cyan-400">{skill.level}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="skill-bar h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full" 
                data-level={skill.level}
                style={{ width: '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Logos Section */}
      <div className="pt-12 flex flex-wrap justify-center gap-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
         <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" className="h-12 w-auto" alt="JS" />
         <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="h-12 w-auto" alt="React" />
         <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" className="h-12 w-auto" alt="Python" />
         <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" className="h-12 w-auto" alt="C++" />
         <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" className="h-12 w-auto" alt="Tailwind" />
      </div>
    </div>
  );
};

export default SkillsSection;
