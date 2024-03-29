'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import TestimonalsCard from '../Testimonials/TestimonalsCard';
import ProjectCard from '../Projects/ProjectCard';
import Link from 'next/link';
import { motion } from 'framer-motion';

type PaginationProps = {
  data: any[];
  type: 'testimonials' | 'projects';
  max: number;
};

const Pagination = ({
  data,
  max,
  type,
}: PaginationProps): React.ReactElement => {
  const [selected, setSelected] = useState<number>(0);

  const elementNumber = Math.ceil(data.length / max);

  const showButtons = data.length > max;

  return (
    <div className='flex flex-col'>
      {type === 'testimonials' && (
        <div className='flex flex-col md:flex-row gap-2 md:gap-8 my-4'>
          {data
            .slice(selected * max, max * (selected + 1))
            .map((item, index) => (
              <motion.div
                key={index}
                whileInView={{
                  opacity: [0, 1],
                  x: [0, 0],
                  transition: { duration: 1, delay: index * 0.25 },
                }}
              >
                <TestimonalsCard testimonial={item} />
              </motion.div>
            ))}
        </div>
      )}
      {type === 'projects' && (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 md:mt-20'>
          {data
            .slice(selected * max, max * (selected + 1))
            .map((item, index) => (
              <motion.div
                key={index}
                whileInView={{
                  opacity: [0, 1],
                  x: [0, 0],
                  transition: { duration: 1, delay: index * 1 },
                }}
              >
                <ProjectCard project={item} />
              </motion.div>
            ))}
        </div>
      )}
      {showButtons && (
        <div className='flex flex-row gap-2 justify-center items-center mt-8'>
          {Array.from({ length: elementNumber }, (_, index) => (
            <Link href={`#${type}`} key={index}>
              <Button
                variant='outline'
                className={`text-muted-foreground hover:text-accent-red hover:border-accent-red p-0 h-[30px] w-[30px] md:h-[38px] md:w-[40px] text-xs md:text-sm border-muted-foreground ${
                  selected === index && 'border-accent-red text-accent-red'
                }`}
                onClick={() => setSelected(index)}
              >
                {index + 1}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pagination;
