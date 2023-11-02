import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectFiller from './ProjectFiller';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

import { projects } from '@/constants/projects';

type ProjectProps = {};

const Projects = ({}: ProjectProps): React.ReactElement => {
  return (
    <section className='wrapper flex-center my-20 md:my-40'>
      <div className='header-text'>Projects</div>
      <ScrollArea className='w-full h-[450px] md:h-[310px]'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 md:mt-20'>
          {projects.map((item, index) => (
            <ProjectCard key={index} project={item} />
          ))}
          <ProjectFiller />
        </div>
        <ScrollBar />
      </ScrollArea>
    </section>
  );
};

export default Projects;
