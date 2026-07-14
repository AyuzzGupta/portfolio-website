import { ExternalLink, TrendingUp, Cpu, Award } from 'lucide-react';

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


export default function Portfolio() {
  const projects = [
    {
      title: "AI Based Student Dropout Prediction",
      year: "2025",
      role: "Solo ML Developer",
      tags: ["Python", "Random Forest Classifier", "Pandas", "NumPy", "Matplotlib", "Data Analysis"],
      description: [
        "Built end-to-end ML pipeline using Random Forest classifier, achieving ~80% prediction accuracy on student dropout datasets.",
        "Applied feature engineering, normalization, and cross-validation to improve model robustness and generalization.",
        "Generated visual insights via Matplotlib, improving interpretability of model outputs for decision-making."
      ],
      github: "https://github.com/AyuzzGupta/AI-based-dropout-predection",
      demo: "#",
      // Visualizer: ML nodes pipeline
      visualizer: (
        <div className="w-full h-64 rounded-xl bg-[#07080f] border border-white/5 p-4 flex flex-col justify-between font-mono relative overflow-hidden group-hover:border-accent/20 transition-all duration-300">
          <div className="flex items-center justify-between text-xs text-[#64748b] border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5"><Cpu size={12} className="text-accent" /> RandomForestClassifier</span>
            <span className="text-[#64748b]">Accuracy: ~80%</span>
          </div>
          <div className="flex-grow flex items-center justify-center py-4">
            {/* Visualizing ML Nodes */}
            <div className="flex items-center justify-between w-full max-w-sm text-[10px] text-center">
              <div className="flex flex-col gap-2">
                <div className="px-2 py-1 bg-white/5 border border-white/5 rounded">Dataset</div>
                <div className="px-2 py-1 bg-white/5 border border-white/5 rounded">Features</div>
              </div>
              <div className="text-[#64748b]">&rarr;</div>
              <div className="p-3 bg-accent/5 border border-accent/20 rounded relative">
                <div className="text-accent font-bold">Random Forest</div>
                <div className="text-[8px] text-[#64748b] mt-0.5">100 Trees</div>
              </div>
              <div className="text-[#64748b]">&rarr;</div>
              <div className="flex flex-col gap-2">
                <div className="px-2 py-1 bg-[#22c55e]/15 border border-[#22c55e]/25 text-[#22c55e] rounded">Active</div>
                <div className="px-2 py-1 bg-[#ef4444]/15 border border-[#ef4444]/25 text-[#ef4444] rounded">Dropout</div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-2 rounded border border-white/5 text-[9px] text-[#94a3b8] flex justify-between items-center">
            <span>GridSearchCV Optimization</span>
            <span className="text-accent">cv=5</span>
          </div>
        </div>
      )
    },
    {
      title: "Stock Trading Simulation Platform",
      year: "2024",
      role: "Team Lead (Led a team of 4)",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Chart.js", "Tailwind CSS"],
      description: [
        "Led a team of 4 to build a full-stack MERN simulator with virtual fund allocation, live portfolio tracking, and real-time charting.",
        "Implemented JWT-based authentication, secure session management, and a responsive dark-themed UI using Tailwind CSS.",
        "Designed RESTful API architecture handling trade execution, portfolio state, and user account management."
      ],
      github: "https://github.com/AyuzzGupta/Stock-Trading-Simulation",
      demo: "#",
      // Visualizer: Full-stack System Architecture
      visualizer: (
        <div className="w-full h-64 rounded-xl bg-[#07080f] border border-white/5 p-4 flex flex-col justify-between font-mono relative overflow-hidden group-hover:border-accent/20 transition-all duration-300">
          <div className="flex items-center justify-between text-xs text-[#64748b] border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5"><TrendingUp size={12} className="text-accent" /> MERN System Architecture</span>
            <span className="text-[#64748b]">REST API & WebSockets</span>
          </div>
          <div className="flex-grow flex items-center justify-center py-4">
            {/* Visualizing Architecture Nodes */}
            <div className="flex items-center justify-between w-full max-w-sm text-[9px] text-center gap-1">
              <div className="flex flex-col gap-2">
                <div className="px-2 py-1 bg-white/5 border border-white/5 rounded text-white font-semibold">Client UI</div>
                <div className="text-[8px] text-[#64748b]">React / Chart.js</div>
              </div>
              <div className="text-[#64748b]">&harr;</div>
              <div className="p-3 bg-accent/5 border border-accent/20 rounded relative">
                <div className="text-accent font-bold text-[10px] mb-0.5">REST API</div>
                <div className="text-[8px] text-[#64748b]">Express / JWT</div>
              </div>
              <div className="text-[#64748b]">&harr;</div>
              <div className="flex flex-col gap-2">
                <div className="px-2 py-1 bg-white/5 border border-white/5 rounded text-white font-semibold">MongoDB</div>
                <div className="text-[8px] text-[#64748b]">Database Schema</div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-2 rounded border border-white/5 text-[9px] text-[#94a3b8] flex justify-between items-center">
            <span>Secure JWT Sessions</span>
            <span className="text-accent">MERN Stack</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl text-left">
            <div className="text-accent font-display text-xs font-semibold tracking-widest uppercase mb-3">Portfolio</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Sourced Work & Projects
            </h2>
            <p className="text-[#64748b] mt-4 font-sans text-base">
              Rigorously constructed repositories highlighting full-stack engineering, API design, and predictive statistical models.
            </p>
          </div>
        </div>

        {/* Dynamic Project Display */}
        <div className="flex flex-col gap-20">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={project.title}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group`}
              >
                {/* Content Side */}
                <div className={`lg:col-span-6 flex flex-col items-start text-left ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3 text-xs text-[#64748b] font-display font-medium mb-3">
                    <span className="text-accent">{project.year}</span>
                    <span>•</span>
                    <span>{project.role}</span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Bullet points */}
                  <ul className="space-y-3 mb-6 text-[#94a3b8] font-sans text-sm leading-relaxed text-justify">
                    {project.description.map((bullet, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="text-accent mt-1.5 select-none text-[8px]">&bull;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[#94a3b8] font-display text-[10px] tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-display font-semibold uppercase tracking-wider text-white hover:text-accent transition-colors duration-300"
                    >
                      <GithubIcon size={14} />
                      <span>Codebase</span>
                    </a>

                  </div>
                </div>

                {/* Visualizer Side */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {project.visualizer}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
