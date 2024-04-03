'use client'

import React, { FC } from 'react'
import { Tab, Tabs as TabsUi } from '@nextui-org/react'
import { categoriesEnum } from '@/commons/enums'

interface TabItemProps {
  setSelected: any
  items: {
    key: string
    title: string
  }[]
}

export const Tabs: FC<TabItemProps> = ({ items, setSelected }) => {
  return (
    <>
      <TabsUi
        items={items}
        onSelectionChange={(key) =>
          setSelected(key as keyof typeof categoriesEnum)
        }
        classNames={{
          base: 'block sm:inline-flex',
          tabList: 'flex-col sm:flex-row'
        }}>
        {({ key, title }) => <Tab key={key} title={title} />}
      </TabsUi>
    </>
  )
}
