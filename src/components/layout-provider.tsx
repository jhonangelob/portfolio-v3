'use client';

import * as React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { usePathname } from 'next/navigation';
import { Toaster } from './ui/toaster';
import Loading from '@/app/loading';
import { useLoadingState } from '@/store/useLoading';

type LayoutProvider = {
  children: React.ReactNode;
};

export function LayoutProvider({ children }: LayoutProvider) {
  const path = usePathname();

  const { isLoading } = useLoadingState();

  if (path.includes('studio')) {
    return (
      <>
        <Header />
        {children}
      </>
    );
  } else {
    return isLoading ? (
      <React.Fragment>
        <Loading />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </React.Fragment>
    );
  }
}
