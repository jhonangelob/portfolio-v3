'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { socials } from '@/constants/socials';
import { animateFooter } from '@/lib/animate';

const Footer = (): React.ReactElement => {
  return (
    <footer className='flex-center bottom-0 w-screen z-10 bg-background'>
      <motion.div
        className='flex justify-center items-center md:justify-between flex-col md:flex-row  text-foreground max-w-6xl w-full border-none md:border-t-2 pb-4 px-4 md:px-8 pt-6'
        animate={animateFooter.up.animate}
        initial={animateFooter.up.initial}
      >
        <div className='text-sm hidden md:block'>
          Built with Next.js, Tailwind, shadcdn/ui, and Vercel
        </div>
        <nav className='hidden md:block'>
          <ul className='flex-end flex-row gap-4'>
            {socials.map(
              (item, index) =>
                item.show.footer && (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className='text-sm font-semibold hover:text-accent-red'
                    >
                      {item.name}
                    </Link>
                  </li>
                )
            )}
            <li>
              <p className='text-sm font-semibold ml-4 italic select-none'>
                jhn
              </p>
            </li>
          </ul>
        </nav>
        <div className='text-xs md:text-sm text-center block md:hidden text-muted-foreground'>
          © 2022 Jhon Angelo Bustarde
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
