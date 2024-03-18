import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React from 'react';
import { loadQuery } from '../../../sanity/lib/store';
import { ABOUT_QUERY } from '../../../sanity/lib/queries';
import { AboutType } from '@/types/about';
import { socials } from '@/constants/socials';
import Link from 'next/link';

const AboutPage = async (): Promise<React.ReactElement> => {
  const data = await loadQuery<AboutType | any>(ABOUT_QUERY);

  return (
    <div className='page-wrapper'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>About</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='header-text-secondary mt-8'>About Me</div>
      <div className='text-secondary-foreground flex flex-col gap-2 md:w-4/6'>
        {data.data[0].texts.map((item: any, index: any) => (
          <p key={index}>{item.children[0].text}</p>
        ))}
        <div className='flex flex-row gap-4 pt-4'>
          <p>Socials:</p>
          {socials.map((item, index) => (
            <div key={index}>
              <Link href={item.link} className='cursor-pointer'>
                <item.icon className='w-6 h-6' />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
