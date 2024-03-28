import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Navbar } from '@/components/organisms/navbar'

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
    <html lang='en'>
      <body className={manrope.className}>
        <Providers>
          <main>
            <Navbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
