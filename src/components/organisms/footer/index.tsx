'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import { menuItems } from '../navbar/utils'
import { Button, LinkButton } from '@/components/atoms/button'
import Logo from '/public/assets/logos/logo.svg'
import Facebook from '/public/assets/icons/facebook.svg'
import Spotify from '/public/assets/icons/spotify.svg'
import Twitter from '/public/assets/icons/twitter.svg'
import Instagram from '/public/assets/icons/instagram.svg'
import LinkedIn from '/public/assets/icons/linkedin.svg'
import YouTube from '/public/assets/icons/youtube.svg'

export const Footer: FC = () => {
  return (
    <section className='bg-white w-full'>
      <div className='container flex justify-between mx-auto my-10 px-4'>
        <div className='gap-11 flex flex-col justify-between'>
          <Logo />
          <div>
            <small className='block font-bold'>Agora Partnerships®</small>
            <small>All Rights Reserved.Reg. U.S. Pat. and TM Off</small>
          </div>
        </div>
        <div className='gap-2 flex flex-col'>
          {menuItems.map((item, idx) => (
            <Link
              color='foreground'
              key={`${item.label}-${idx}`}
              href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <Button className='block mb-5' size='sm'>
            Donate
          </Button>
          <LinkButton href='#'>Subscribe to Our Newsletter</LinkButton>
        </div>
        <div className='gap-11 flex flex-col justify-between'>
          <div className='gap-6 grid grid-cols-3'>
            <Link href='/'>
              <Facebook width='25' />
            </Link>
            <Link href='/'>
              <Instagram width='25' />
            </Link>
            <Link href='/'>
              <Twitter width='25' />
            </Link>
            <Link href='/'>
              <Spotify width='25' />
            </Link>
            <Link href='/'>
              <LinkedIn width='25' />
            </Link>
            <Link href='/'>
              <YouTube width='25' />
            </Link>
          </div>
          <small>info@agora2030.org</small>
        </div>
      </div>
    </section>
  )
}
