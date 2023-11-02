import React from 'react';
import Link from 'next/link';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

type ProjectProps = {
  title: string;
  subtitle: string;
  description: string;
  repository: string;
  link: string;
};

type ProjectCardProps = {
  project: ProjectProps;
};

const ProjectCard = ({ project }: ProjectCardProps): React.ReactElement => {
  return (
    <Card className='w-full border-0 bg-background rounded-none flex-col px-2 md:px-5'>
      <div>
        <p className='text-md font-semibold'>
          {project.title} {project.subtitle && `- ${project.subtitle}`}
        </p>
        <p className='text-xs truncate text-muted-foreground'>
          {project.description}
        </p>
      </div>
      <div className='flex flex-row justify-end space-x-4'>
        {project.repository ? (
          <Link href={project.repository}>
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
            disabled={!project.repository}
          >
            Github
          </Button>
        )}
        {project.link ? (
          <Link href={project.link}>
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
            disabled={!project.link}
          >
            Live
          </Button>
        )}
      </div>
      <Separator className='my-3' />
    </Card>
  );
};

export default ProjectCard;
