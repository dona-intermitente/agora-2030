'use client'

import { useSearchParams } from 'next/navigation'

export default function Post() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  return <>post {id}</>
}
