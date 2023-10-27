import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

import { projects } from '@/constants/projects';

type ProjectProps = {};

const Projects = ({}: ProjectProps): React.ReactElement => {
  return (
    <section className='wrapper flex-center'>
      <div className='header-text'>Projects</div>
      <div className='max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6'>
        {projects.map((item, index) => (
          <Card
            key={index}
            className='w-full border-0 border-b-2 bg-background rounded-none flex-col px-2 md:px-5 pb-1 pt-4'
          >
            <div>
              <p className='text-md font-semibold'>{item.name}</p>
              <p className='text-xs truncate text-muted-foreground'>
                {item.description}
              </p>
            </div>
            <div className='flex flex-row justify-end space-x-4'>
              <Link href={item.repository}>
                <Button
                  variant='link'
                  className='text-xs p-0 hover:text-accent-red'
                >
                  Github
                </Button>
              </Link>
              <Link href={item.link}>
                <Button
                  variant='link'
                  className='text-xs p-0 hover:text-accent-red'
                >
                  Live
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
