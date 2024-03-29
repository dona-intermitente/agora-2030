'use client'

import { LinkButton } from '@/components/atoms/button'
import { Hero } from '@/components/molecules/hero'
import { Programs } from '@/components/organisms/programs'

export default function Home() {
  return (
    <>
      <Hero />
      <div className='container mx-auto'>
        <LinkButton href='/programs'>
          Find Out More About Our Open Programs
        </LinkButton>
        <h1>What Do We Do?</h1>
        <p>
          We calibrate the entrepreneurship ecosystem in Latin America to build
          inclusive prosperity for individuals, businesses, the community, and
          the environment.
        </p>
        <Programs />
      </div>
    </>
  )
}
