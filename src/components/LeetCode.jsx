import { Code, Zap, ChevronRight, Brain, Terminal } from 'lucide-react';
import Reveal from './Reveal';

export default function LeetCode() {
  const activeFocus = [
    {
      topic: "Arrays & Strings",
      level: "Foundational",
      desc: "Practicing sequence traversal, pointer manipulation, and memory-efficient element shifts."
    },
    {
      topic: "Search & Sort Logic",
      level: "Intermediate",
      desc: "Strengthening logic on binary search implementations, merge/quick sort concepts, and data mapping."
    },
    {
      topic: "Time & Space Complexity",
      level: "Analytical Focus",
      desc: "Analyzing Big O complexity to optimize code runtime execution and stack size overhead."
    }
  ];

  return (
    <section id="leetcode" className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl text-left">
              <div className="text-accent font-display text-xs font-semibold tracking-widest uppercase mb-3">LeetCode</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                Algorithmic Practice Log
              </h2>
              <p className="text-[#64748b] mt-4 font-sans text-base">
                Hands-on training on computational structures and complexity optimization.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Layout: Asymmetric split columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Topics Panel (8 cols) */}
          <Reveal delay={150}>
            <div className="lg:col-span-8 p-6 lg:p-8 rounded-2xl border border-white/5 bg-[#07080f]/75 flex flex-col justify-between gap-6 relative overflow-hidden group hover:border-accent/20 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                <div className="flex items-center gap-3 text-left">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-accent">
                    <Code size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white">AyuzzGupta</h3>
                    <p className="text-xs text-[#64748b] font-sans">Profile Verified on LeetCode</p>
                  </div>
                </div>
              </div>

              {/* Focus Topics List */}
              <div className="flex flex-col gap-4 text-left">
                <h4 className="text-xs font-display font-semibold uppercase tracking-widest text-[#64748b] mb-2">
                  Active DSA Focus Areas
                </h4>
                {activeFocus.map((focus, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl border border-white/5 bg-white/5 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <h5 className="font-display font-semibold text-white text-sm">{focus.topic}</h5>
                      <p className="text-xs text-[#94a3b8] font-sans mt-1 max-w-lg">{focus.desc}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#64748b] font-display text-[9px] font-semibold uppercase tracking-wider self-start sm:self-center">
                      {focus.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right Column: Code Profile & Languages (4 cols) */}
          <Reveal delay={300}>
            <div className="lg:col-span-4 p-6 lg:p-8 rounded-2xl border border-white/5 bg-[#07080f]/75 flex flex-col justify-between items-start text-left hover:border-accent/20 transition-all duration-300">
              <div className="w-full">
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/20 text-accent">
                    <Brain size={20} />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-display text-[9px] font-bold uppercase tracking-widest">
                    Active
                  </div>
                </div>
                
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  Practice Stack
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-6 font-sans">
                  Solving problems focusing on language-specific standard libraries and raw pointer structures.
                </p>

                {/* Language Badges */}
                <div className="flex flex-col gap-2 w-full mb-6 border-t border-white/5 pt-4">
                  <div className="flex items-center justify-between text-xs text-[#64748b]">
                    <span className="flex items-center gap-1.5"><Terminal size={12} className="text-accent" /> Python3</span>
                    <span className="text-white font-mono text-[10px]">Primary</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#64748b]">
                    <span className="flex items-center gap-1.5"><Terminal size={12} className="text-[#64748b]" /> C</span>
                    <span className="text-white font-mono text-[10px]">Systems</span>
                  </div>
                </div>
              </div>

              <a
                href="https://leetcode.com/u/AyuzzGupta/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-between w-full p-4 rounded-xl border border-white/10 hover:border-accent/50 hover:bg-accent/5 text-white transition-all duration-300 font-display text-xs font-semibold uppercase tracking-wider"
              >
                <span>View LeetCode Profile</span>
                <ChevronRight size={16} className="text-[#64748b] group-hover/btn:text-accent group-hover/btn:translate-x-1 transition-all duration-200" />
              </a>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
