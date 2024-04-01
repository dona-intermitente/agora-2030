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
      <div className='content gap-16 flex flex-col my-20'>
        <section className='flex flex-col gap-10'>
          <div className='gap-6 grid md:grid-cols-2'>
            <div className='text-end md:order-1'>
              <LinkButton href='/'>
                Find Out More About Our Open Programs
              </LinkButton>
            </div>
            <header>
              <h2 className='text-secondary'>What Do We Do?</h2>
              <h5>
                We calibrate the entrepreneurship ecosystem in Latin America to
                build inclusive prosperity for individuals, businesses, the
                community, and the environment.
              </h5>
            </header>
          </div>
          <Programs />
        </section>
        <section className='flex flex-col gap-10'>
          <div className='gap-6 grid md:grid-cols-2'>
            <div className='text-end md:order-1'>
              <LinkButton href='/'>Become a Partner</LinkButton>
            </div>
            <header>
              <h2 className='text-secondary'>Our Partners</h2>
              <h5>
                Get to know the organizations that support us in our efforts to
                become a more inclusive society, in harmony with the
                environment.
              </h5>
              <h5>
                Contact us to find out how to collaborate with Agora
                Partnerships.
              </h5>
            </header>
          </div>
          <Partners />
        </section>
        <section className='flex flex-col gap-10'>
          <header>
            <h2 className='text-secondary'>Our Funders</h2>
          </header>
          <Funders />
        </section>
      </div>
      <Impact />
      <Form />
    </>
  )
}
