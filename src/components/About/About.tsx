import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { AboutType } from '@/types/about';

type AboutProps = { data: AboutType };

const About = ({ data }: AboutProps): React.ReactElement => {
  return (
    <section className='wrapper my-20 md:my-40'>
      <div className='header-text-secondary'>About</div>
      <div className='w-full flex flex-col md:flex-row space-x-12'>
        <div className='w-full flex flex-col gap-y-4 text-justify md:text-left md:w-4/6 text-sm md:text-base text-secondary-foreground'>
          {data.data[0].texts.map((item, index) => (
            <div key={index}>{item.children[0].text}</div>
          ))}
          <Link
            href='/about'
            className='ml-auto flex flex-row gap-2 group text-accent-red'
          >
            More <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
