import React, { FC } from 'react'
import { Divider } from '../atoms/divider'
import Image from 'next/image'

export const Hero: FC = () => {
  return (
    <section className='h-[70vh] relative'>
      <Image
        alt='background'
        src='/assets/images/background.jpg'
        layout='fill'
        objectFit='cover'
      />
      <aside
        className={`container h-full items-center mx-auto px-10 grid grid-cols-1 md:grid-cols-2 text-white w-100`}>
        <div>
          <h1 className='font-bold text-4xl'>
            We build inclusive prosperity through{' '}
            <span className='font-extrabold'>sustainable entrepreneurs</span>
          </h1>
          <Divider />
          <p className='font-semibold text-lg'>
            We strive for a world in which social and environmental
            sustainability becomes the true business engine.
          </p>
        </div>
      </aside>
    </section>
  )
}
