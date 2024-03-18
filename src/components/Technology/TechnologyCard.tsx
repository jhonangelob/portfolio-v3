import React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Technology } from '@/types/technologies';

type TechnologyProps = {
  technology: Technology;
};

const TechnologyCard = ({
  technology,
}: TechnologyProps): React.ReactElement => {
  const { image, name, description } = technology;
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className='relative w-[35px] h-[35px]'>
          <Image src={image} alt={name} fill={true} />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className='w-80'>
        <div className='flex justify-between space-x-4'>
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback>jhn</AvatarFallback>
          </Avatar>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>{name}</h4>
            <p className='text-sm'>{description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default TechnologyCard;
