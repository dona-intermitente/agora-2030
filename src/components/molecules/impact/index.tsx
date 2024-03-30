import { Counter } from '@/components/atoms/counter'
import React, { FC } from 'react'
import { impactItems } from './utils'
import { Card, CardBody } from '@nextui-org/react'
import { LinkButton } from '@/components/atoms/button'

export const Impact: FC = () => {
  return (
    <Card className='dark bg-secondary'>
      <CardBody className='container grid items-center grid-cols-6 gap-4 py-24'>
        <div className='col-span-2'>
          <h2>Impact</h2>
          <p>
            We are committed to transparency towards entrepreneurs and the
            entrepreneurship ecosystem in Latin America by aligning us with the
            United Nations’ Sustainable Development Goals.
          </p>
        </div>
        <div className='col-span-3 col-start-4 text-right'>
          <div className='mb-10'>
            <LinkButton href='/' color='foreground'>
              Find Out More
            </LinkButton>
          </div>
          <div className='grid flex-auto grid-cols-1 gap-6 light sm:grid-cols-3'>
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
