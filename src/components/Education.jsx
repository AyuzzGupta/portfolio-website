import { GraduationCap, BookOpen, Award, MapPin } from 'lucide-react';
import Reveal from './Reveal';

export default function Education() {
  const educationList = [
    {
      institution: "Inderprastha Engineering College",
      period: "Aug 2024 - Present",
      degree: "B.Tech in Computer Science Engineering",
      location: "Ghaziabad, UP",
      status: "Active Program",
      details: "Actively studying foundational computer science concepts including Data Structures & Algorithms, Object-Oriented Programming, DBMS, and Operating Systems.",
      icon: <GraduationCap size={18} className="text-accent" />
    },
    {
      institution: "Deep Memorial Public School",
      period: "2023",
      degree: "Class 12th (Senior Secondary Education)",
      location: "Ghaziabad, UP",
      status: "CBSE Board",
      details: "Completed high school curriculum with a primary concentration in Physics, Chemistry, Mathematics, and Computer Science.",
      icon: <BookOpen size={18} className="text-accent" />
    },
    {
      institution: "Deep Memorial Public School",
      period: "2021",
      degree: "Class 10th (Secondary School Examination)",
      location: "Ghaziabad, UP",
      status: "CBSE Board",
      details: "Completed secondary education under the CBSE curriculum with high academic distinction.",
      icon: <Award size={18} className="text-accent" />
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
              <p className="text-[#94a3b8] mt-4 font-sans text-base leading-relaxed max-w-sm">
                Current and prior academic credentials confirming computer science engineering focus and foundational school education.
              </p>
            </div>
          </Reveal>

          {/* Right Column: Large geometric cards */}
          <div className="lg:col-span-8 flex flex-col gap-6 w-full">
            {educationList.map((edu, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <div 
                  className="p-6 md:p-7 rounded-2xl border border-white/10 bg-[#07080f]/80 hover:bg-[#0a0f1d]/90 backdrop-blur-md hover:border-accent/35 transition-all duration-300 text-left group shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300">
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-white text-lg md:text-xl group-hover:text-accent transition-colors duration-200">
                          {edu.institution}
                        </h3>
                        <p className="font-sans text-sm text-accent font-medium mt-0.5">
                          {edu.degree}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-display text-xs font-medium text-white">
                        {edu.period}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 font-display text-xs font-medium text-accent">
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-[#cbd5e1] leading-relaxed mt-3 border-t border-white/5 pt-3">
                    {edu.details}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
