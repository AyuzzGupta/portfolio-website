import { Calendar, MapPin, ExternalLink, Briefcase, Award } from 'lucide-react';
import Reveal from './Reveal';

export default function Experience() {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "3Skill Training",
      duration: "Jun 2026 - Aug 2026",
      location: "Remote",
      isCurrent: false,
      credentialId: "ID-INTERN261519",
      certificateUrl: "/certificates/3Skill_Web_Development_Internship_Certificate.pdf",
      description: [
        "Completed a 2-month internship focused on Web Development and practical, project-based learning.",
        "Worked on strengthening web development skills through hands-on projects and implementation.",
        "Gained practical exposure to development workflows and professional practices aligned with industry expectations.",
        "Improved problem-solving and technical skills through project-based tasks and continuous learning."
      ]
    },
    {
      role: "Artificial Intelligence Intern",
      company: "1M1B (1 Million for 1 Billion)",
      duration: "Jun 2026 - Aug 2026",
      location: "Remote",
      isCurrent: false,
      certificateUrl: "/certificates/1M1B_Green_Skills_Applied_AI_Completion_Certificate.pdf",
      description: [
        "Project selected among the Top 20 out of 5,000+ submissions as part of the 1M1B Green Skills & Applied AI Internship.",
        "Completed 70+ hours of hands-on learning across AI, Data Analysis, Green Skills, and Sustainability, culminating in the development of a real-world AI-enabled sustainability project."
      ]
    },
    {
      role: "Co-Editor / Core Team Member",
      company: "MUNify",
      duration: "2024 - 2025",
      location: "Remote",
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
              <p className="text-[#94a3b8] mt-4 font-sans text-base leading-relaxed">
                A record of professional internships, technical engineering programs, and leadership contributions.
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
                      ? 'border-accent shadow-[0_0_10px_#38bdf8]' 
                      : 'border-white/20 group-hover:border-accent'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${exp.isCurrent ? 'bg-accent' : 'bg-white/30 group-hover:bg-accent'}`} />
                </div>

                {/* Card Container with enhanced readability */}
                <div className="p-7 rounded-2xl border border-white/10 bg-[#07080f]/80 hover:bg-[#0a0f1d]/90 backdrop-blur-md group-hover:border-accent/35 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-0.5 shadow-lg group-hover:shadow-[0_8px_30px_rgba(56,189,248,0.1)]">
                  
                  {/* Company Tag / Header */}
                  <div className="text-accent font-display text-xs font-semibold tracking-wide uppercase mb-2 flex items-center gap-2">
                    <Briefcase size={14} />
                    <span>{exp.company}</span>
                  </div>

                  {/* Title and Metadata */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-accent transition-colors duration-200">
                        {exp.role}
                      </h3>
                      {exp.credentialId && (
                        <span className="inline-block mt-1 text-[10px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/10">
                          Cert ID: {exp.credentialId}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-sans text-[#94a3b8]">
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-medium">
                        <Calendar size={13} className="text-accent" /> {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-medium">
                        <MapPin size={13} className="text-accent" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points with crisp readability */}
                  <ul className="space-y-3 font-sans text-sm text-[#cbd5e1] leading-relaxed mb-5">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-3 items-start">
                        <span className="text-accent mt-1.5 select-none text-[8px]">&bull;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Certificate Link if available */}
                  {exp.certificateUrl && (
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs text-[#64748b] font-display uppercase tracking-wider">
                        Verified Credential
                      </span>
                      <a
                        href={exp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-accent hover:text-white transition-colors duration-200"
                      >
                        <Award size={14} />
                        <span>View Completion Certificate</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  )}

                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}
