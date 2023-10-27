import React from 'react';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Technology from '@/components/Technology/Technology';
import Certificate from '@/components/Certificate/Certificate';
import Contact from '@/components/Contact/Contact';

const Home = (): React.ReactElement => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Technology />
      <Contact />
      <Certificate />
    </main>
  );
};

export default Home;
