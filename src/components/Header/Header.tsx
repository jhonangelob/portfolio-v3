'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import { GanttChart } from 'lucide-react';

const Header = (): React.ReactElement => {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: 'Projects',
      href: '/projects',
      description:
        'Discover my personal projects—a showcase of creativity, skills, and passion.',
    },
    {
      title: 'Experience',
      href: '/experience',
      description: 'Page is under construction.',
      // description:
      //   'An overview of my expertise, achievements, and contributions in various roles and industries.',
    },
    {
      title: 'Technologies',
      href: '/technologies',
      description: 'Page is under construction.',
      // description:
      //   'Technologies fueling my projects—explore the tools, languages, and frameworks I leverage to bring ideas to life.',
    },
  ];

  const disabledLinks = ['/experience', '/technologies'];

  return (
    <header className='fixed top-0 w-full bg-background z-50'>
      <NavigationMenu className='w-full max-w-7xl mx-auto flex flex-row justify-between px-4 md:px-8 py-6 [&>*:first-child]:w-full'>
        <NavigationMenuList>
          <NavigationMenuItem className=' float-left'>
            <p className='flex items-center text-2xl font-bold italic select-none'>
              jhn
            </p>
          </NavigationMenuItem>
          <NavigationMenuItem className=' float-right'>
            <NavigationMenuTrigger>
              <GanttChart className='hover:text-accent-red transition-all w-8 h-8 ' />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-4 w-full md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                <li className='row-span-3 md:bg-secondary rounded-md'>
                  <NavigationMenuLink asChild>
                    <a
                      className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted md:p-6 no-underline outline-none focus:shadow-md'
                      href='/about'
                    >
                      <div className='hidden md:block md:my-4 text-xl font-bold italic text-foreground'>
                        jhn
                      </div>
                      <p className='text-sm leading-tight text-foreground mb-1'>
                        About
                      </p>
                      <p className='text-sm leading-tight text-muted-foreground hover:text-foreground'>
                        Software Engineer who specialized with the intricate
                        domain of Web Development.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {components.map((item, index) => (
                  <Link
                    key={item.title + index}
                    href={item.href}
                    title={item.title}
                    className='text-sm flex flex-col gap-1'
                  >
                    <p className='text-foreground'>{item.title}</p>
                    <p className='text-secondary-foreground font-light text-xs hover:text-foreground'>
                      {item.description}
                    </p>
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
