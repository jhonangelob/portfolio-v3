import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { projects } from '@/constants/projects';

type ProjectFillerProps = {};

const ProjectFiller = ({}: ProjectFillerProps): React.ReactElement => {
  return (
    <>
      {projects.length < 4 && (
        <Card className='w-full border-0 bg-background rounded-none flex-col px-2 md:px-5'>
          <div className='flex flex-col gap-2'>
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
      )}
    </>
  );
};

export default ProjectFiller;
