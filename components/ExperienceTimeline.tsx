
import React from 'react';
import { EXPERIENCES, RESUME_DATA } from '../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      
      {/* Work Experience */}
      <div className="space-y-8">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-cyan-500/20 text-cyan-400 rounded-2xl">
            <Briefcase size={28} />
          </div>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>

        <div className="space-y-12 border-l border-white/5 ml-6 pl-10 relative">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[53px] top-1 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors"></div>
              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-400 uppercase">{exp.period}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {exp.role} @ <span className="text-slate-400">{exp.company}</span>
                </h3>
                <ul className="space-y-2 text-sm text-slate-500 leading-relaxed">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex gap-2">
                      <span className="text-cyan-400/50">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-8">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-2xl">
            <GraduationCap size={28} />
          </div>
          <h2 className="text-4xl font-bold">Education</h2>
        </div>

        <div className="space-y-12 border-l border-white/5 ml-6 pl-10 relative">
          {RESUME_DATA.education.map((edu, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[53px] top-1 w-6 h-6 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors"></div>
              <div className="space-y-2">
                <span className="text-xs font-mono text-indigo-400 uppercase">{edu.period}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {edu.school}
                </h3>
                <p className="text-slate-400 font-medium italic">{edu.degree}</p>
                <p className="text-sm text-slate-500">{edu.sub}</p>
              </div>
            </div>
          ))}
          
          {/* High School Info */}
          <div className="relative group">
            <div className="absolute -left-[53px] top-1 w-6 h-6 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:bg-slate-700 transition-colors"></div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-slate-500 uppercase">2021 – 2023</span>
              <h3 className="text-lg font-bold text-white">Deep Memorial Public School</h3>
              <p className="text-sm text-slate-500">Class 12th — 75% CBSE</p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -left-[53px] top-1 w-6 h-6 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:bg-slate-700 transition-colors"></div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-slate-500 uppercase">2021</span>
              <h3 className="text-lg font-bold text-white">Deep Memorial Public School</h3>
              <p className="text-sm text-slate-500">Class 10th — 88% CBSE</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ExperienceTimeline;
