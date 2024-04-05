'use client'

import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Accessibilik from 'accessibility-react-widget'

export function Providers({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <Accessibilik />
        {children}
      </NextUIProvider>
    </QueryClientProvider>
  )
}
