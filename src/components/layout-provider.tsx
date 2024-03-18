'use client';

import * as React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { usePathname } from 'next/navigation';
import { Toaster } from './ui/toaster';

type LayoutProvider = {
  children: React.ReactNode;
};

export function LayoutProvider({ children }: LayoutProvider) {
  const path = usePathname();

  if (path.includes('studio')) {
    return (
      <>
        <Header />
        {children}
      </>
    );
  } else {
    return (
      <React.Fragment>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </React.Fragment>
    );
  }
}
