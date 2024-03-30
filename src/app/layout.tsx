import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Navbar } from '@/components/organisms/navbar'
import { Footer } from '@/components/organisms/footer'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agora 2030',
  description: 'copy of the agora 2030 website'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className={manrope.className}>
        <Providers>
          <main className='text-foreground bg-background'>
            <Navbar />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}
