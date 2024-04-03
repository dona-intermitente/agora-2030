import React, { FC } from 'react'
import { Card, Skeleton } from '@nextui-org/react'

export const CardSkeleton: FC = () => {
  return [...Array(3)].map((_, idx) => (
    <Card key={idx} className='w-full space-y-5 p-4' radius='lg'>
      <Skeleton className='aspect-video rounded-lg' />
      <div className='space-y-3'>
        <Skeleton className='h-3 w-3/5 rounded-lg' />
        <Skeleton className='h-3 w-4/5 rounded-lg' />
        <Skeleton className='h-3 w-2/5 rounded-lg' />
      </div>
    </Card>
  ))
}
