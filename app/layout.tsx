import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from '@/components/client-layout'

export const metadata: Metadata = {
  title: 'Turn Videos Into Flipbooks',
  description: 'Transform your videos into custom flipbooks - perfect for gifts, weddings, and special moments',
  generator: 'v0.dev',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  themeColor: '#FECB23',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ClipToFlip',
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#FECB23" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ClipToFlip" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
