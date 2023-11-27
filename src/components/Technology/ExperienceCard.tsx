import React from 'react';
import { Separator } from '../ui/separator';
import { ScrollBar } from '../ui/scroll-area';
import { Experience } from '@/types/experiences';
import { motion } from 'framer-motion';
import { animate } from '@/lib/animate';

type ExperienceCardProps = {
  experience: Experience;
};

const ExperienceCard = ({
  experience,
}: ExperienceCardProps): React.ReactElement => {
  const { position, company, location, date } = experience;
  return (
    <motion.div whileInView={animate.slide.left}>
      <div className='w-full space-y-1'>
        <div className='text-sm font-semibold'>{position}</div>
        <div className='text-xs'>{company}</div>
        <div className='text-xs text-muted-foreground'>{location}</div>
        <div className='text-xs text-muted-foreground'>
          {date.start} -{' '}
          {date.isPresent ? (
            <span className='text-accent-red'>Present</span>
          ) : (
            date.end
          )}
        </div>
      </div>
      <Separator className='my-3' />
      <ScrollBar orientation='horizontal' />
    </motion.div>
  );
};

export default ExperienceCard;
