'use client'

import { AppContextProvider } from '@/context/app/provider'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import dynamic from 'next/dynamic'

const Accessibilik = dynamic(() => import('accessibility-react-widget'), {
  ssr: false
})

export function Providers({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <AppContextProvider>
          <Accessibilik />
          {children}
        </AppContextProvider>
      </NextUIProvider>
    </QueryClientProvider>
  )
}
