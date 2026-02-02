
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsSection from './components/SkillsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import anime from 'animejs';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Initial entry animations
    (anime as any)({
      targets: 'body',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 1000
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-cyan-500/30">
      <Navbar scrolled={scrolled} />
      
      <main className="container mx-auto px-4 md:px-8 space-y-32 pb-20">
        <section id="home" className="pt-32">
          <Hero />
        </section>

        <section id="projects" className="scroll-mt-24">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 gradient-text">Featured Projects</h2>
          <BentoGrid />
        </section>

        <section id="skills" className="scroll-mt-24">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 gradient-text">Skills & Expertise</h2>
          <SkillsSection />
        </section>

        <section id="education" className="scroll-mt-24">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 gradient-text">Education & Experience</h2>
          <ExperienceTimeline />
        </section>

        <section id="connect" className="scroll-mt-24">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 gradient-text">Let's Connect</h2>
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
