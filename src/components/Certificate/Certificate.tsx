'use client';

import React from 'react';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

import { Certificates } from '@/types/certificates';
import { useRouter } from 'next/navigation';

type Props = {
  certificates: Certificates;
};

const Certificate = ({ certificates }: Props): React.ReactElement => {
  const router = useRouter();

  return (
    <section className='max-w-5xl w-screen my-12 px-4 md:px-0 flex-center'>
      <div className='flex-center flex-row flex-wrap mx-10 gap-8 md:gap-10 md:mt-12'>
        {certificates.data.map((item, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger>
                <div className='relative w-[75px] md:w-[110px] h-[75px] md:h-[110px]'>
                  <Image
                    key={index}
                    src={item.source}
                    alt={item.title}
                    sizes='auto'
                    fill={true}
                    className='cursor-pointer hover:opacity-100 hover:grayscale-0 hover:scale-105 opacity-60 grayscale transition-normal'
                    onClick={() => router.push(item.link)}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent className='text-center p-4'>
                <p>{item.title}</p>
                <p className='text-xs text-muted-foreground'>Click to visit</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
