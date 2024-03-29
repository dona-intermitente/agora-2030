import React, { FC } from 'react'
import { Slide } from '@/components/atoms/slide'
import { partnerItems } from './utils'
import { LinkButton } from '@/components/atoms/button'

export const Partners: FC = () => {
  return (
    <section>
      <LinkButton href='/'>Become a Partner</LinkButton>
      <h2>Our Partners</h2>
      <p>
        Get to know the organizations that support us in our efforts to become a
        more inclusive society, in harmony with the environment.
      </p>
      <p>Contact us to find out how to collaborate with Agora Partnerships.</p>
      <Slide items={partnerItems} />
    </section>
  )
}
