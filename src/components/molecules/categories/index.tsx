'use client'

import React, { Dispatch, FC, SetStateAction } from 'react'
import { categorieItems } from './utils'
import { Tabs } from '@/components/atoms/tabs'
import { categoriesEnum } from '@/commons/enums'

type CategoriesProps = {
  setFilter: Dispatch<SetStateAction<keyof typeof categoriesEnum>>
}

export const Categories: FC<CategoriesProps> = ({ setFilter }) => {
  return <Tabs items={categorieItems} setSelected={setFilter} />
}
