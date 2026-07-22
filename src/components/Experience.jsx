import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import Reveal from './Reveal';

export default function Experience() {
  const experiences = [
    {
      role: "Sustainability Intern (Green Skills & Applied AI)",
      company: "1M1B Foundation (One Million for One Billion)",
      duration: "June 2026 - Present",
      location: "Remote / Online Program",
      isCurrent: true,
      description: [
        "Contributing towards designing sustainable institutions and building Green campus initiatives.",
        "Developing data-driven solutions for energy, water conservation, and waste management optimization.",
        "Gaining hands-on exposure to Applied AI models, open-source environmental calculators, and PowerBI visualization tools."
      ]
    },
    {
      role: "Co-Editor / Core Team Member",
      company: "MUNify",
      duration: "2024 - 2025",
      location: "Faridabad, Haryana",
      isCurrent: false,
      description: [
        "Owned end-to-end content workflows across editorial and campaign verticals, improving execution throughput by ~15%.",
        "Coordinated with marketing and design teams to maintain brand consistency across multi-platform digital channels.",
        "Drove digital promotion strategies that measurably improved event discovery and delegate engagement metrics."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.05] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl text-left">
              <div className="text-accent font-display text-xs font-semibold tracking-widest uppercase mb-3">Experience</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                Work History & Activities
              </h2>
              <p className="text-[#64748b] mt-4 font-sans text-base">
                A record of professional internships, technical training programs, and competitive engineering achievements.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-12 pl-8 md:pl-16 space-y-12 max-w-4xl text-left">
          
          {experiences.map((exp, idx) => (
            <Reveal key={idx} delay={idx * 150}>
              <div className="relative group">
                
                {/* Timeline Marker (Circle / Node) */}
                <div 
                  className={`absolute -left-[41px] md:-left-[73px] top-1.5 w-6 h-6 rounded-full border-2 bg-[#020205] transition-all duration-300 flex items-center justify-center ${
                    exp.isCurrent 
                      ? 'border-accent shadow-[0_0_10px_#00f0ff]' 
                      : 'border-white/10 group-hover:border-accent/50'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${exp.isCurrent ? 'bg-accent' : 'bg-white/20'}`} />
                </div>

                {/* Card Container */}
                <div className="p-6 rounded-2xl border border-white/5 bg-[#07080f]/50 backdrop-blur-sm group-hover:border-accent/25 transition-all duration-300 relative overflow-hidden">
                  {exp.isCurrent && (
                    <div className="absolute top-0 right-0 px-3 py-1 bg-accent/10 border-b border-l border-accent/20 rounded-bl-xl text-accent font-display text-[9px] font-semibold uppercase tracking-widest">
                      Active Role
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-accent transition-colors duration-200">
                        {exp.role}
                      </h3>
                      <div className="text-sm text-[#94a3b8] font-sans mt-0.5">{exp.company}</div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-[#64748b] font-display">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {exp.duration}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 font-sans text-sm text-[#94a3b8] leading-relaxed">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-2.5 items-start">
                        <span className="text-accent mt-2 select-none text-[6px]">&bull;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}
