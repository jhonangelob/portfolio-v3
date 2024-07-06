import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import '@/styles/globals.css';
import { LayoutProvider } from '@/components/layout-provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Jhon Angelo Bustarde',
  description: 'Jhon Angelo Bustarde | Software Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body
        className={`${poppins.className} w-full bg-background flex flex-col min-h-screen overflow-x-hidden pt-[90px] items-center`}
      >
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
