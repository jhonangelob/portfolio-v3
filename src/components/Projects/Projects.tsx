import React from 'react';

import { projects } from '@/constants/projects';
import Pagination from '../Pagination/Pagination';

type ProjectProps = {};

const Projects = ({}: ProjectProps): React.ReactElement => {
  return (
    <section className='wrapper flex-center my-20 md:my-40' id='projects'>
      <div className='header-text'>Projects</div>
      <Pagination data={projects} type='projects' max={4} />
    </section>
  );
};

export default Projects;
