import React from 'react';

type HeroProps = {};

const Hero = ({}: HeroProps): React.ReactElement => {
  return (
    <section className='wrapper md:mt-44 md:mb-52'>
      <div className='w-full flex justify-end text-lg md:text-2xl font-semibold u text-muted-foreground italic md:not-italic'>
        Software Engineer
      </div>
      <div className='font-bold text-foreground text-justify md:text-left text-5xl md:text-7xl'>
        I specialize in <span className='text-accent-red'>Front-End</span> Web
        Development and <span className='text-accent-red'>UI/UX</span> Design.
      </div>
    </section>
  );
};

export default Hero;
