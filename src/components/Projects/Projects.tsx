import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

import { projects } from '@/constants/projects';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { Separator } from '../ui/separator';

type ProjectProps = {};

const Projects = ({}: ProjectProps): React.ReactElement => {
  const slots = 4 - projects.length;
  const extra = Array.from({ length: slots }, (_, index) => (
    <Card
      key={index}
      className='w-full border-0 bg-background rounded-none flex-col px-2 md:px-5'
    >
      <div>
        <p className='text-md font-semibold text-muted-foreground'>
          Project - Incomplete.
        </p>
        <p className='text-xs truncate text-muted-foreground'>
          Currently building something great.
        </p>
      </div>
      <div className='flex flex-row justify-end space-x-4'>
        <Button
          variant='link'
          className='text-xs p-0 hover:text-accent-red'
          disabled
        >
          Github
        </Button>
        <Button
          variant='link'
          className='text-xs p-0 hover:text-accent-red'
          disabled
        >
          Live
        </Button>
      </div>
      <Separator className='my-3' />
    </Card>
  ));

  return (
    <section className='wrapper flex-center my-20 md:my-40'>
      <div className='header-text'>Projects</div>
      <ScrollArea className='w-full h-[450px] md:h-[310px]'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 md:mt-20'>
          {projects.map((item, index) => (
            <Card
              key={index}
              className='w-full border-0 bg-background rounded-none flex-col px-2 md:px-5'
            >
              <div>
                <p className='text-md font-semibold'>
                  {item.title} {item.subtitle && `- ${item.subtitle}`}
                </p>
                <p className='text-xs truncate text-muted-foreground'>
                  {item.description}
                </p>
              </div>
              <div className='flex flex-row justify-end space-x-4'>
                {item.repository ? (
                  <Link href={item.repository}>
                    <Button
                      variant='link'
                      className='text-xs p-0 hover:text-accent-red'
                    >
                      Github
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant='link'
                    className='text-xs p-0 hover:text-accent-red'
                    disabled={!item.repository}
                  >
                    Github
                  </Button>
                )}
                {item.link ? (
                  <Link href={item.link}>
                    <Button
                      variant='link'
                      className='text-xs p-0 hover:text-accent-red'
                    >
                      Live
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant='link'
                    className='text-xs p-0 hover:text-accent-red'
                    disabled={!item.link}
                  >
                    Live
                  </Button>
                )}
              </div>
              <Separator className='my-3' />
            </Card>
          ))}
          {extra}
        </div>
        <ScrollBar />
      </ScrollArea>
    </section>
  );
};

export default Projects;
