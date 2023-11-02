import React from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';

import { experiences } from '@/constants/experiences';
import { technologies } from '@/constants/technologies';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { Separator } from '../ui/separator';

type TechnologyProps = {};

const Technology = ({}: TechnologyProps): React.ReactElement => {
  return (
    <section className='wrapper my-20 md:my-40'>
      <div className='header-text-secondary text-left w-3/6'>
        Technologies and Experience
      </div>
      <div className='w-full md:w-4/6 self-start text-sm mb-4'>
        I&apos;m a skilled web developer with expertise in various technologies
        and a passion for continuous learning and growth in the field.
      </div>
      <div className='flex max-w-full w-full flex-col md:flex-row text-sm gap-6 md:gap-4'>
        <div className='w-full md:w-4/6 space-y-4'>
          <p className='text-accent-red text-base font-medium'>Technologies</p>
          <p>Full Stack Development</p>
          <div className='flex flex-row flex-wrap gap-6'>
            {technologies.development.map((item, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div className='relative w-[30px] h-[30px] md:w-[35px] md:h-[35px]'>
                    <Image
                      key={index}
                      src={item.assets}
                      alt={item.name}
                      fill={true}
                    />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className='w-80'>
                  <div className='flex justify-between space-x-4'>
                    <Avatar>
                      <AvatarImage src={item.assets} />
                      <AvatarFallback>jhn</AvatarFallback>
                    </Avatar>
                    <div className='space-y-1'>
                      <h4 className='text-sm font-semibold'>{item.name}</h4>
                      <p className='text-sm'>{item.description}</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
          <p>Others</p>
          <div className='flex flex-row flex-wrap space-x-6'>
            {technologies.others.map((item, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div
                    key={index}
                    className='relative w-[30px] h-[30px] md:w-[35px] md:h-[35px]'
                  >
                    <Image src={item.assets} alt={item.name} fill={true} />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className='w-80'>
                  <div className='flex justify-between space-x-4'>
                    <Avatar>
                      <AvatarImage src={item.assets} />
                      <AvatarFallback>jhn</AvatarFallback>
                    </Avatar>
                    <div className='space-y-1'>
                      <h4 className='text-sm font-semibold'>{item.name}</h4>
                      <p className='text-sm'>{item.description}</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
        <div className='w-full md:w-2/6 flex-col flex gap-4'>
          <p className='text-accent-red text-base font-medium'>
            Professional Experience
          </p>
          <ScrollArea className='h-[230px] w-full md:w-5/6'>
            {experiences.map((item, index) => (
              <div key={index}>
                <div className='w-full space-y-1'>
                  <div className='text-sm font-semibold'>{item.position}</div>
                  <div className='text-xs'>{item.name}</div>
                  <div className='text-xs text-muted-foreground'>
                    {item.location}
                  </div>
                  <div className='text-xs text-muted-foreground'>
                    {item.date.start} -{' '}
                    {item.date.isPresent ? (
                      <span className='text-accent-red'>Present</span>
                    ) : (
                      item.date.end
                    )}
                  </div>
                </div>
                <Separator className='my-3' />
                <ScrollBar orientation='horizontal' />
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default Technology;
