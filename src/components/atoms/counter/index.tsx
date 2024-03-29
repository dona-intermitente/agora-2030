import React, { FC } from 'react'
import { Card as CardUi, CardBody } from '@nextui-org/react'
import CountUp from 'react-countup'

type CounterProps = {
  description: string
  value: number
}

export const Counter: FC<CounterProps> = ({ description, value }) => {
  return (
    <CardUi className='h-full'>
      <CardBody className='text-center text-secondary px-8 py-10'>
        <CountUp
          end={value}
          duration={5}
          delay={0}
          scrollSpyOnce
          enableScrollSpy
          className='text-4xl font-bold mb-3'
        />
        <p>{description}</p>
      </CardBody>
    </CardUi>
  )
}
