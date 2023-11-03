'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';
import { RxArrowRight, RxMoon, RxSun, RxCrumpledPaper } from 'react-icons/rx';
import { motion } from 'framer-motion';

import { socials } from '@/constants/socials';
import { animateHeader } from '@/lib/animate';

type HeaderProps = {};

const Header = ({}: HeaderProps): React.ReactElement => {
  const { theme, setTheme } = useTheme();
  const [loading, setLoading] = useState<boolean>(true);

  const changeTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const themeIcon = useMemo(
    () =>
      loading ? (
        <RxCrumpledPaper className='h-6 w-6' />
      ) : theme === 'dark' ? (
        <RxMoon className='h-6 w-6' />
      ) : (
        <RxSun className='h-6 w-6' />
      ),
    [theme, loading]
  );

  useEffect(() => {
    setLoading(false);
  }, [theme]);

  return (
    <header className='fixed top-0 w-full bg-background z-10'>
      <nav className='w-full max-w-7xl mx-auto flex flex-row justify-between px-4 md:px-8 py-6'>
        <motion.div
          className='flex items-center text-xl md:text-2xl font-bold italic select-none'
          animate={animateHeader.right.animate}
          initial={animateHeader.right.initial}
        >
          jhn
        </motion.div>
        <motion.ul
          className='flex flex-row items-center gap-x-8'
          animate={animateHeader.left.animate}
          initial={animateHeader.left.initial}
        >
          {socials.map(
            (item, index) =>
              item.show.header && (
                <li key={index} className='hidden md:block'>
                  <Link href={item.link}>
                    <item.icon className='h-6 w-6' />
                  </Link>
                </li>
              )
          )}
          <li className='hidden md:block'>
            <Link href='/'>
              <Button
                variant='outline'
                size='lg'
                className='border-2 border-accent-red text-accent-red hover:border-foreground text-md font-medium gap-x-4'
              >
                Let&apos;s Talk <RxArrowRight />
              </Button>
            </Link>
          </li>
          <li className='block md:hidden'>
            <Link href='/' className='uppercase text-sm font-bold'>
              Contact
            </Link>
          </li>
          <li>
            <Button variant='ghost' className='p-0' onClick={changeTheme}>
              {themeIcon}
            </Button>
          </li>
        </motion.ul>
      </nav>
    </header>
  );
};

export default Header;
