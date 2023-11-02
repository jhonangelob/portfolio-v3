import React from 'react';
import { experiences } from '@/constants/experiences';
import { technologies } from '@/constants/technologies';
import { ScrollArea } from '../ui/scroll-area';
import ExperienceCard from './ExperienceCard';
import TechnologyCard from './TechnologyCard';

type TechnologyProps = {};

const Technology = ({}: TechnologyProps): React.ReactElement => {
  return (
    <section className='wrapper my-20 md:my-40'>
      <div className='header-text-secondary text-left w-3/6'>
        Technologies and Experience
      </div>
      <div className='w-full md:w-4/6 self-start text-sm mb-4'>
        I&apos;m a skilled web developer with expertise in various technologies
        and a passion for continuous learning and growth in the field.
      </div>
      <div className='flex max-w-full w-full flex-col md:flex-row text-sm gap-6 md:gap-4'>
        <div className='w-full md:w-4/6 space-y-4'>
          <p className='text-accent-red text-base font-medium'>Technologies</p>
          <p>Full Stack Development</p>
          <div className='flex flex-row flex-wrap gap-6'>
            {technologies.development.map((item, index) => (
              <TechnologyCard technology={item} key={index} />
            ))}
          </div>
          <p>Others</p>
          <div className='flex flex-row flex-wrap space-x-6'>
            {technologies.others.map((item, index) => (
              <TechnologyCard technology={item} key={index} />
            ))}
          </div>
        </div>
        <div className='w-full md:w-2/6 flex-col flex gap-4'>
          <p className='text-accent-red text-base font-medium'>
            Professional Experience
          </p>
          <ScrollArea className='h-[230px] w-full md:w-5/6'>
            {experiences.map((item, index) => (
              <ExperienceCard experience={item} key={index} />
            ))}
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default Technology;
