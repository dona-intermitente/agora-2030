import React, { FC } from 'react'
import { Divider } from '../../atoms/divider'
import Image from 'next/image'

export const Hero: FC = () => {
  return (
    <section className='h-[70vh] relative'>
      <Image
        alt='background'
        className='object-cover'
        src='/assets/images/background.jpg'
        fill
        priority
      />
      <aside
        className={`container h-full relative items-center px-10 grid grid-cols-1 md:grid-cols-2 text-white w-100`}>
        <div>
          <h1 className='text-4xl font-bold'>
            We build inclusive prosperity through{' '}
            <span className='font-extrabold'>sustainable entrepreneurs</span>
          </h1>
          <Divider />
          <h4>
            We strive for a world in which social and environmental
            sustainability becomes the true business engine.
          </h4>
        </div>
      </aside>
    </section>
  )
}
