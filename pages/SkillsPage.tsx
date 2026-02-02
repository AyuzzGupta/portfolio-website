import React, { useEffect } from 'react';
import SkillsSection from '../components/SkillsSection';

const SkillsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-8 py-32 min-h-screen">
      <div className="mb-16 space-y-4">
        <h1 className="text-6xl md:text-7xl font-bold">Skills & Expertise</h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          A comprehensive overview of my technical skills and proficiencies across various technologies and domains.
        </p>
      </div>
      <SkillsSection />
    </div>
  );
};

export default SkillsPage;
