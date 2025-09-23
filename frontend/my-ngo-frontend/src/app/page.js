'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Stories from '../components/Stories';
import DonateCTA from '../components/DonateCTA';
import Transparency from '../components/Transparency';
import VolunteerCTA from '../components/VolunteerCTA';
import Events from '../components/Events';
import Footer from '../components/Footer';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen`}>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <Hero />
      <About />
      <Programs />
      <Stories />
      <DonateCTA />
      <Transparency />
      <VolunteerCTA />
      <Events />
      <Footer />
    </div>
  );
}
