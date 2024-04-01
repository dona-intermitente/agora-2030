import React, { FC } from 'react'
import { Card } from '@/components/atoms/card'
import { programItems } from './utils'

export const Programs: FC = () => {
  return (
    <section className='gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {programItems.map((item, idx) => (
        <Card key={idx} {...item} />
      ))}
    </section>
  )
}
