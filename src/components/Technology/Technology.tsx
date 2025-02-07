'use client';

import React from 'react';
import { ScrollArea } from '../ui/scroll-area';
import ExperienceCard from './ExperienceCard';
import TechnologyCard from './TechnologyCard';
import { motion } from 'framer-motion';
import { animate } from '@/lib/animate';
import { Experiences } from '@/types/experiences';
import { Technologies } from '@/types/technologies';

type TechnologyProps = {
  technologies: Technologies;
  experience: Experiences;
};

const Technology = ({
  technologies,
  experience,
}: TechnologyProps): React.ReactElement => {
  return (
    <section className='wrapper my-20 md:my-40'>
      <div className='header-text-secondary text-left w-3/6'>
        Technologies and Experience
      </div>
      <motion.div
        className='w-full md:w-4/6 self-start text-sm mb-4'
        whileInView={animate.appearNoDelay}
      >
        I&apos;m a skilled web developer with expertise in various technologies
        and a passion for continuous learning and growth in the field.
      </motion.div>
      <div className='flex max-w-full w-full flex-col md:flex-row text-sm gap-6 md:gap-4'>
        <div className='w-full md:w-4/6 space-y-4'>
          <p className='text-accent-red text-base font-medium'>Technologies</p>
          <p>Development</p>
          <div className='flex flex-row flex-wrap w-full md:w-5/6 gap-6'>
            {technologies.data[0].development.map((item, index) => (
              <motion.div
                key={`${item}-${index}`}
                whileInView={{
                  opacity: [0, 1],
                  x: [0, 0],
                  transition: { duration: 1, delay: index * 0.05 },
                }}
              >
                <TechnologyCard technology={item} />
              </motion.div>
            ))}
          </div>
          <p>Others</p>
          <div className='flex flex-row flex-wrap w-full md:w-5/6 gap-6'>
            {technologies.data[0].others.map((item, index) => (
              <motion.div
                key={`${item}-${index}`}
                whileInView={{
                  opacity: [0, 1],
                  x: [0, 0],
                  transition: { duration: 1, delay: index * 0.05 },
                }}
              >
                <TechnologyCard technology={item} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className='w-full md:w-2/6 flex-col flex gap-4 mt-4 md:mt-0'>
          <p className='text-accent-red text-base font-medium'>
            Relevant Experience
          </p>
          <ScrollArea className='h-[230px] w-full md:w-5/6'>
            {experience.data.map((item, index) => (
              <div key={`${item}- ${index}`}>
                <motion.div
                  className='block md:hidden'
                  whileInView={animate.slide.up}
                >
                  <ExperienceCard experience={item} />
                </motion.div>
                <motion.div
                  className='hidden md:block'
                  whileInView={animate.slide.left}
                >
                  <ExperienceCard experience={item} />
                </motion.div>
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default Technology;
