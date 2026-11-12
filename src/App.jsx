import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Project';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import { useLenis } from './hooks/useLenis';

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  // Activate Lenis smooth scroll + GSAP ScrollTrigger sync
  useLenis();

  return (
    <main>
      <Hero onPreloadComplete={() => setPreloaderComplete(true)} />
      
      {preloaderComplete && (
        <div className="animate-fade-in-up">
          <Navbar />
          <About />
          <Services />
          <Project />
          <ContactSection />
          <Footer />
        </div>
      )}
    </main>
  );
}

export default App;
