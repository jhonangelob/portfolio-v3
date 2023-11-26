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
    <section className='wrapper my-40 md:mt-44 md:mb-52'>
      <motion.div
        className='font-bold text-foreground text-justify md:text-left text-5xl md:text-7xl'
        ref={ref}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={animateText.up}
      >
        I specialize in the intricate domain of{' '}
        <span className='text-accent-red'>Web Development.</span>
      </motion.div>
    </section>
  );
};

export default Hero;
