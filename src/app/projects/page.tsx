import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';
import React from 'react';
import { loadQuery } from '../../../sanity/lib/store';
import { ProjectsTypes } from '@/types/projects';
import { PROJECTS_QUERY } from '../../../sanity/lib/queries';

const ProjectsPage = async (): Promise<React.ReactElement> => {
  const data = await loadQuery<ProjectsTypes | any>(PROJECTS_QUERY);

  const content = data?.data.map((project: any) => {
    return {
      title: project.title,
      description: project.description,
      technologies: project.technologies,
      link: {
        repository: project.repository,
        live: project.link,
      },
      content: (
        <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>
          {project.image && (
            <Image
              src={project.image}
              width={300}
              height={300}
              className='h-full w-full object-cover'
              alt='linear board demo'
              quality={100}
            />
          )}
        </div>
      ),
    };
  });

  return (
    <div className='page-wrapper'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Projects</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='header-text-secondary mt-8'>Projects</div>
      <StickyScroll content={content} />
    </div>
  );
};

export default ProjectsPage;
