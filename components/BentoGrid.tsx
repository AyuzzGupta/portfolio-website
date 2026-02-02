
import React, { useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, MapPin, Keyboard, Terminal, Award } from 'lucide-react';
import anime from 'animejs';

const BentoGrid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Fix: Cast anime to any to resolve "not callable" type error appearing in some ESM environments
          (anime as any)({
            targets: '.bento-item',
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(100),
            easing: 'easeOutElastic(1, .8)',
            duration: 1000
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[220px]">
      
      {/* Featured Project */}
      <div className="bento-item md:col-span-2 lg:col-span-3 lg:row-span-2 glass-card p-8 group flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="AI Project" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419] via-transparent to-transparent"></div>
        </div>
        <div className="z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-[10px] uppercase font-bold rounded">Featured Project</span>
          </div>
          <h3 className="text-3xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{PROJECTS[0].title}</h3>
          <p className="text-slate-400 text-sm max-w-sm">
            {PROJECTS[0].description}
          </p>
        </div>
        <div className="z-10 flex gap-4">
          <button className="p-3 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-slate-900 transition-all">
            <Github size={20} />
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-slate-900 rounded-full hover:bg-cyan-400 transition-all text-sm font-bold">
            Live Demo <ExternalLink size={14} />
          </button>
        </div>
      </div>

      {/* Location Card */}
      <div className="bento-item md:col-span-2 lg:col-span-2 glass-card p-6 flex flex-col justify-center gap-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 z-0"></div>
        <div className="flex items-center gap-3 z-10">
          <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
            <MapPin size={24} />
          </div>
          <div>
            <h4 className="font-bold text-lg">Ghaziabad</h4>
            <p className="text-slate-500 text-xs uppercase tracking-widest">India • UTC +5:30</p>
          </div>
        </div>
        <div className="w-full h-24 bg-slate-800/50 rounded-xl relative overflow-hidden border border-white/5">
           <img src="https://images.unsplash.com/photo-1517404212379-81343714659b?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-20" alt="India Location" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse"></div>
        </div>
      </div>

      {/* Experience Years Card */}
      <div className="bento-item lg:col-span-1 glass-card p-6 flex flex-col items-center justify-center gap-2 text-center group">
         <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl mb-2 group-hover:rotate-12 transition-transform">
            <Terminal size={24} />
         </div>
         <span className="text-4xl font-bold">2+</span>
         <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Years Coding</span>
      </div>

      {/* Achievement Card */}
      <div className="bento-item lg:col-span-2 glass-card p-6 flex flex-col justify-between group">
        <div className="flex justify-between items-start">
           <div className="p-3 bg-green-500/20 text-green-500 rounded-xl">
             <Award size={24} />
           </div>
           <span className="text-xs font-mono text-slate-500 italic">Competition</span>
        </div>
        <div>
           <h4 className="font-bold text-sm mb-1 group-hover:text-green-400 transition-colors">Prep-BE Finalist</h4>
           <p className="text-xs text-slate-500">Ranked top teams in National Engineering Competition 2024</p>
        </div>
      </div>

      {/* Stats Card - Typing Speed */}
      <div className="bento-item md:col-span-2 lg:col-span-1 glass-card p-6 flex flex-col justify-between group">
        <div className="flex justify-between items-start">
           <Keyboard size={20} className="text-amber-500" />
           <span className="text-[10px] font-mono text-slate-500">Typing</span>
        </div>
        <div className="text-center">
          <span className="text-4xl font-black transition-all group-hover:text-amber-500">94</span>
          <span className="text-xs font-bold text-slate-500 ml-1">WPM</span>
        </div>
        <div className="text-[9px] text-center text-slate-600 font-mono">98% Accuracy</div>
      </div>

      {/* Github Activity Heatmap */}
      <div className="bento-item md:col-span-4 lg:col-span-6 glass-card p-8 flex flex-col justify-between">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Github size={24} className="text-white" />
            <div>
              <h4 className="font-bold">Commit History</h4>
              <p className="text-xs text-slate-500">Building consistently every day</p>
            </div>
          </div>
          <div className="text-right">
             <span className="text-2xl font-bold block">1,378</span>
             <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Contributions in 2024</span>
          </div>
        </div>
        <div className="grid grid-cols-20 sm:grid-cols-40 md:grid-cols-52 gap-1.5 h-16">
          {Array.from({ length: 156 }).map((_, i) => (
            <div 
              key={i} 
              className={`rounded-[2px] w-full h-full transition-all duration-300 hover:scale-125 ${
                Math.random() > 0.8 ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.4)]' : 
                Math.random() > 0.5 ? 'bg-cyan-700/50' : 
                Math.random() > 0.3 ? 'bg-cyan-900/30' : 
                'bg-slate-800'
              }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default BentoGrid;
