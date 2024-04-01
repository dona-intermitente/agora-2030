import { Counter } from '@/components/atoms/counter'
import React, { FC } from 'react'
import { impactItems } from './utils'
import { Card, CardBody } from '@nextui-org/react'
import { LinkButton } from '@/components/atoms/button'

export const Impact: FC = () => {
  return (
    <Card className='dark bg-secondary'>
      <CardBody className='content grid gap-10 lg:gap-0 lg:grid-cols-6 items-center py-24'>
        <div className='lg:col-span-2'>
          <h2>Impact</h2>
          <h5 className='text-balance'>
            We are committed to transparency towards entrepreneurs and the
            entrepreneurship ecosystem in Latin America by aligning us with the
            United Nations’ Sustainable Development Goals.
          </h5>
        </div>
        <div className='lg:col-span-4 xl:col-span-3 xl:col-start-4'>
          <div className='mb-10 lg:text-right'>
            <LinkButton href='/' color='foreground'>
              Find Out More
            </LinkButton>
          </div>
          <div className='gap-6 grid grid-cols-1 sm:grid-cols-3 light'>
            {impactItems.map((item, idx) => (
              <Counter
                key={idx}
                value={item.value}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
