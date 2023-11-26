import React from 'react';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Technology from '@/components/Technology/Technology';
import Certificate from '@/components/Certificate/Certificate';
import Contact from '@/components/Contact/Contact';
import Testimonials from '@/components/Testimonials/Testimonials';

const Home = (): React.ReactElement => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Technology />
      <Testimonials />
      <Contact />
      <Certificate />
    </main>
  );
};

export default Home;
