import React, { useEffect } from 'react';
import BentoGrid from '../components/BentoGrid';

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-8 py-32 min-h-screen">
      <div className="mb-16 space-y-4">
        <h1 className="text-6xl md:text-7xl font-bold">My Projects</h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          A collection of work showcasing my expertise in full-stack development, machine learning, and innovative problem-solving.
        </p>
      </div>
      <BentoGrid />
    </div>
  );
};

export default ProjectsPage;
