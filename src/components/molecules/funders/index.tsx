import React, { FC } from 'react'
import { Slide } from '@/components/atoms/slide'
import { funderItems } from './utils'

export const Funders: FC = () => {
  return <Slide items={funderItems} />
}
