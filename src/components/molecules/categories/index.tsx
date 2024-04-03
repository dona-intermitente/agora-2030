'use client'

import React, { FC } from 'react'
import { categorieItems } from './utils'
import { Tabs } from '@/components/atoms/tabs'

type CategoriesProps = {
  setFilter: any
}

export const Categories: FC<CategoriesProps> = ({ setFilter }) => {
  return <Tabs items={categorieItems} setSelected={setFilter} />
}
