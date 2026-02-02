import React, { useEffect } from 'react';
import Contact from '../components/Contact';

const ConnectPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-8 py-32 min-h-screen">
      <Contact />
    </div>
  );
};

export default ConnectPage;
