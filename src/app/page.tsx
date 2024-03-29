'use client'

import { LinkButton } from '@/components/atoms/button'
import { Funders } from '@/components/molecules/funders'
import { Hero } from '@/components/molecules/hero'
import { Impact } from '@/components/molecules/impact'
import { Partners } from '@/components/molecules/partners'
import { Form } from '@/components/organisms/form'
import { Programs } from '@/components/organisms/programs'

export default function Home() {
  return (
    <>
      <Hero />
      <div className='container mx-auto'>
        <LinkButton href='/'>Find Out More About Our Open Programs</LinkButton>
        <h1>What Do We Do?</h1>
        <p>
          We calibrate the entrepreneurship ecosystem in Latin America to build
          inclusive prosperity for individuals, businesses, the community, and
          the environment.
        </p>
        <Programs />
        <Partners />
        <Funders />
      </div>
      <Impact />
      <Form />
    </>
  )
}
