import React from 'react';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Technology from '@/components/Technology/Technology';
// import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';
import Certificate from '@/components/Certificate/Certificate';
import { loadQuery } from '../../sanity/lib/store';
import {
  ABOUT_QUERY,
  PROJECTS_QUERY,
  EXPERIENCE_QUERY,
  TECHNOLOGIES_QUERY,
  // TESTIMONIALS_QUERY,
  CERTIFICATE_QUERY,
} from '../../sanity/lib/queries';

const Home = async (): Promise<React.ReactElement> => {
  const aboutData = await loadQuery<any>(ABOUT_QUERY);
  const projects = await loadQuery<any>(PROJECTS_QUERY);
  const experience = await loadQuery<any>(EXPERIENCE_QUERY);
  const technologies = await loadQuery<any>(TECHNOLOGIES_QUERY);
  // const testimonials = await loadQuery<any>(TESTIMONIALS_QUERY);
  const certifications = await loadQuery<any>(CERTIFICATE_QUERY);

  return (
    <main>
      <Hero />
      <About data={aboutData} />
      <Projects projects={projects} />
      <Technology technologies={technologies} experience={experience} />
      {/* <Testimonials testimonials={testimonials} /> */}
      <Contact />
      <Certificate certificates={certifications} />
    </main>
  );
};

export default Home;
