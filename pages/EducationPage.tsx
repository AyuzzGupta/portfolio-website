import React, { useEffect } from 'react';
import ExperienceTimeline from '../components/ExperienceTimeline';

const EducationPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-8 py-32 min-h-screen">
      <div className="mb-16 space-y-4">
        <h1 className="text-6xl md:text-7xl font-bold">Experience & Education</h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          My professional journey and academic background that shaped my expertise and career path.
        </p>
      </div>
      <ExperienceTimeline />
    </div>
  );
};

export default EducationPage;
