import React, { FC } from 'react'
import { Slide } from '@/components/atoms/slide'
import { partnerItems } from './utils'

export const Partners: FC = () => {
  return <Slide items={partnerItems} />
}
