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
    <section className='w-full'>
      <div className='content flex flex-col md:flex-row gap-8 justify-between my-10'>
        <div className='flex flex-col gap-10 justify-between'>
          <Logo />
          <div>
            <small className='block font-bold'>Agora Partnerships®</small>
            <small>All Rights Reserved.Reg. U.S. Pat. and TM Off</small>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
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
        <div className='flex flex-col gap-10 justify-between'>
          <div className='flex flex-none gap-6 md:grid md:grid-cols-3 items-center'>
            <Link href='https://www.facebook.com/AgoraPartnerships'>
              <Facebook width='25' />
            </Link>
            <Link href='https://www.instagram.com/agora_2030'>
              <Instagram width='25' />
            </Link>
            <Link href='https://twitter.com/Agora2030'>
              <Twitter width='25' />
            </Link>
            <Link href='https://open.spotify.com/show/2ejv4LsiSWT9GsFnnHsHZc?si=8f23d80250c54fb6&nd=1'>
              <Spotify width='25' />
            </Link>
            <Link href='https://www.linkedin.com/company/agora-partnerships'>
              <LinkedIn width='25' />
            </Link>
            <Link href='https://www.youtube.com/channel/UCHourQ5NcP4S-jsA2fvBmEA'>
              <YouTube width='25' />
            </Link>
          </div>
          <small>info@agora2030.org</small>
        </div>
      </div>
    </section>
  )
}
