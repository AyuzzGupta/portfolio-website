import React, { useEffect } from 'react';
import anime from 'animejs';
import Hero from '../components/Hero';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Initial entry animations
    (anime as any)({
      targets: 'body',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 1000
    });
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-8 py-32">
      <Hero />
    </div>
  );
};

export default HomePage;
