import type { Metadata, Viewport } from 'next'
import './globals.css'
import ClientLayout from '@/components/client-layout'

export const metadata: Metadata = {
  title: 'Turn Videos Into Flipbooks',
  description: 'Transform your videos into custom flipbooks - perfect for gifts, weddings, and special moments',
  generator: 'v0.dev',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ClipToFlip',
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#FECB23',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
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
