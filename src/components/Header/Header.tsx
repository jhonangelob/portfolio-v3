import React from 'react';
import Link from 'next/link';

import { Mail } from 'lucide-react';

const Header = (): React.ReactElement => {
  return (
    <header className='fixed top-0 w-full bg-background z-10'>
      <div className='w-full max-w-7xl mx-auto flex flex-row justify-between px-4 md:px-8 py-6 [&>*:first-child]:w-full'>
        <Link
          href='/'
          className='flex items-center text-2xl font-bold italic select-none'
        >
          jhn
        </Link>
        <Link href='#contact'>
          <Mail />
        </Link>
      </div>
    </header>
  );
};

export default Header;
