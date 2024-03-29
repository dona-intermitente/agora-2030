import React, { FC } from 'react'
import { Slide } from '@/components/atoms/slide'
import { partnersItems } from './utils'

export const Partners: FC = () => {
  return <Slide items={partnersItems} />
}
