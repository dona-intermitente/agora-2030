'use client'

import React, { FC } from 'react'
import { Tab, Tabs } from '@nextui-org/react'
import { categorieItems } from './utils'

export const Categories: FC = () => {
  return (
    <div className='flex w-full flex-col'>
      <Tabs items={categorieItems}>
        {(item) => <Tab key={item.key} title={item.title} />}
      </Tabs>
    </div>
  )
}
