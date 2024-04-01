import React, { FC } from 'react'
import { Card as CardUi, CardBody } from '@nextui-org/react'
import CountUp from 'react-countup'

type CounterProps = {
  description: string
  value: number
}

export const Counter: FC<CounterProps> = ({ description, value }) => {
  return (
    <CardUi className='h-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
      <CardBody className='text-center text-secondary px-6 py-10'>
        <CountUp
          end={value}
          duration={5}
          delay={0}
          scrollSpyOnce
          enableScrollSpy
          className='text-4xl font-bold mb-3'
        />
        <p className='font-semibold text-balance'>{description}</p>
      </CardBody>
    </CardUi>
  )
}
