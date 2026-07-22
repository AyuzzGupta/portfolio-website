import { GraduationCap, BookOpen, Award } from 'lucide-react';
import Reveal from './Reveal';

export default function Education() {
  const educationList = [
    {
      institution: "Inderprastha Engineering College",
      period: "Aug 2024 - Present",
      degree: "B.Tech in Computer Science Engineering",
      score: "CGPA: 7.01",
      location: "Ghaziabad, UP",
      details: "Actively studying foundational computer science concepts including Data Structures & Algorithms, Object-Oriented Programming, DBMS, and Operating Systems.",
      icon: <GraduationCap size={18} className="text-accent" />
    },
    {
      institution: "Deep Memorial Public School",
      period: "2023",
      degree: "Class 12th (Senior Secondary Education)",
      score: "Score: 75% | CBSE",
      location: "Ghaziabad, UP",
      details: "Completed high school curriculum with a primary concentration in Physics, Chemistry, Mathematics, and Computer Science.",
      icon: <BookOpen size={18} className="text-[#64748b]" />
    },
    {
      institution: "Deep Memorial Public School",
      period: "2021",
      degree: "Class 10th (Secondary School Examination)",
      score: "Score: 88% | CBSE",
      location: "Ghaziabad, UP",
      details: "Completed secondary education under the CBSE curriculum with academic honors.",
      icon: <Award size={18} className="text-[#64748b]" />
    }
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Heading and intro */}
          <Reveal>
            <div className="lg:col-span-4 text-left flex flex-col justify-start">
              <div className="text-accent font-display text-xs font-semibold tracking-widest uppercase mb-3">Education</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                Academic Background
              </h2>
              <p className="text-[#64748b] mt-4 font-sans text-base leading-relaxed max-w-sm">
                Current and prior academic credentials confirming computer science engineering focus and foundational school education.
              </p>
            </div>
          </Reveal>

          {/* Right Column: Large geometric year-cards */}
          <div className="lg:col-span-8 flex flex-col gap-8 w-full">
            {educationList.map((edu, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <div 
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start border-b border-white/5 pb-8 group"
                >
                  {/* Year display column */}
                  <div className="md:col-span-3 text-left">
                    <div className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {edu.period}
                    </div>
                  </div>

                  {/* Content description column */}
                  <div className="md:col-span-9 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="p-1.5 rounded-lg bg-white/5 border border-white/5">
                        {edu.icon}
                      </span>
                      <h3 className="font-display font-semibold text-white text-lg">
                        {edu.institution}
                      </h3>
                    </div>

                    <p className="font-sans text-sm text-[#94a3b8] mb-1 font-semibold">
                      {edu.degree}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-display text-[#64748b] mb-4">
                      <span className="text-accent font-semibold">{edu.score}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>

                    <p className="font-sans text-sm text-[#64748b] leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
