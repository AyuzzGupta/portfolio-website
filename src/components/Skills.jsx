import { Code, Layers, Database, Shield, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      name: "AI & Machine Learning",
      icon: <Cpu size={18} className="text-accent" />,
      skills: ["Machine Learning", "Data Analysis", "Statistical Modelling", "NumPy", "Pandas", "Matplotlib"]
    },
    {
      name: "Web Development",
      icon: <Layers size={18} className="text-accent" />,
      skills: ["React", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "REST APIs"]
    },
    {
      name: "Languages",
      icon: <Code size={18} className="text-accent" />,
      skills: ["JavaScript", "Python", "Java", "C", "C++", "SQL", "HTML", "CSS"]
    },
    {
      name: "Tools & Systems",
      icon: <Database size={18} className="text-accent" />,
      skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Git", "GitHub", "VS Code", "IntelliJ IDEA", "Android Studio"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.05] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        
        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Heading and intro */}
          <div className="lg:col-span-4 text-left flex flex-col justify-start">
            <div className="text-accent font-display text-xs font-semibold tracking-widest uppercase mb-3">Skills</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Technical Stack
            </h2>
            <p className="text-[#64748b] mt-4 font-sans text-base leading-relaxed max-w-sm">
              An inventory of core programming languages, statistical packages, database services, and software engineering abstractions sourced directly from active work.
            </p>
          </div>

          {/* Right Column: Grouped grid */}
          <div className="lg:col-span-8 flex flex-col gap-6 w-full">
            {skillCategories.map((category) => (
              <div 
                key={category.name}
                className="p-6 rounded-xl border border-white/5 bg-[#07080f]/50 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-accent/25 transition-all duration-300"
              >
                {/* Header of category */}
                <div className="flex items-center gap-3 text-left min-w-[200px]">
                  {category.icon}
                  <h3 className="font-display font-semibold text-white text-base tracking-wide group-hover:text-accent transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 justify-start sm:justify-end max-w-lg">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 hover:border-accent/40 hover:bg-accent/5 hover:text-accent font-display text-xs text-[#94a3b8] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
