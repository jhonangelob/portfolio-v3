'use client';
import React, { useRef } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    technologies: string[];
    link: {
      live: string;
      repository: string;
    };
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className='h-[30rem] w-full overflow-y-auto flex justify-center relative space-x-10 pr-4 md:pr-10'
      ref={ref}
    >
      <div className='div relative flex items-start w-full lg:w-3/6'>
        <div>
          {content.map((item, index) => (
            <div key={`${item}- ${index}`} className='my-20'>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-2xl font-bold text-accent-red'
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-kg text-primary max-w-sm mt-4'
              >
                {item.description}
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-kg text-primary max-w-sm mt-4'
              >
                Technologies
                <div className='text-sm flex flex-row flex-wrap gap-2 mt-2'>
                  {item.technologies.map((item, index) => (
                    <p
                      key={`${item}- ${index}`}
                      className='text-muted-foreground whitespace-nowrap'
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-kg text-primary max-w-sm mt-4'
              >
                Links
                <div className='text-sm flex flex-row gap-6 mt-2'>
                  {item.link.repository && (
                    <Link
                      href={item.link.repository}
                      className='text-secondary-foreground hover:text-accent-red'
                    >
                      Github
                    </Link>
                  )}
                  {item.link.live && (
                    <Link
                      href={item.link.live}
                      className='text-secondary-foreground hover:text-accent-red'
                    >
                      Live
                    </Link>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
          <div className='h-40' />
        </div>
      </div>
      <motion.div
        className={cn(
          'hidden lg:block h-60 w-3/6 bg-white sticky top-12 overflow-hidden rounded-sm',
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
