import React from 'react';

import Pagination from '../Pagination/Pagination';
import { ProjectsTypes } from '@/types/projects';

type ProjectProps = { projects: ProjectsTypes };

const Projects = ({ projects }: ProjectProps): React.ReactElement => {
  const { data } = projects;

  return (
    <section className='wrapper flex-center my-20 md:my-40' id='projects'>
      <div className='header-text'>Projects</div>
      <Pagination data={data} type='projects' max={4} />
    </section>
  );
};

export default Projects;
