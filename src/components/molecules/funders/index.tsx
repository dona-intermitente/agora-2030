import React, { FC } from 'react'
import { Slide } from '@/components/atoms/slide'
import { funderItems } from './utils'

export const Funders: FC = () => {
  return (
    <section>
      <h2>Our Funders</h2>
      <Slide items={funderItems} />
    </section>
  )
}
