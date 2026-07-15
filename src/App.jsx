import ThreeBackgroundNetwork from './components/ThreeBackgroundNetwork';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import LeetCode from './components/LeetCode';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Connect from './components/Connect';

export default function App() {
  return (
    <div className="relative min-h-screen text-[#e2e8f0]">
      {/* 3D background canvas */}
      <ThreeBackgroundNetwork />

      {/* Main UI layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Portfolio />
          <Skills />
          <LeetCode />
          <Experience />
          <Education />
          <Certifications />
        </main>
        <Connect />
      </div>
    </div>
  );
}
