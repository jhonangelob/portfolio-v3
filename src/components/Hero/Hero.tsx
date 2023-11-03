'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animateText } from '@/lib/animate';

type HeroProps = {};

const Hero = ({}: HeroProps): React.ReactElement => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className='wrapper md:mt-44 md:mb-52'>
      <motion.div
        className='w-full flex justify-end text-lg md:text-2xl font-semibold u text-muted-foreground italic md:not-italic'
        ref={ref}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={animateText.appear}
      >
        Software Engineer
      </motion.div>
      <motion.div
        className='font-bold text-foreground text-justify md:text-left text-5xl md:text-7xl'
        ref={ref}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={animateText.up}
      >
        I specialize in <span className='text-accent-red'>Front-End</span> Web
        Development and <span className='text-accent-red'>UI/UX</span> Design.
      </motion.div>
    </section>
  );
};

export default Hero;
