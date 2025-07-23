import type { Metadata } from 'next'
import './globals.css'
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initMixpanel, default as mixpanel } from '@/lib/mixpanel';

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname();

  useEffect(() => {
    initMixpanel();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      mixpanel.track('Page View', { page: pathname });
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
