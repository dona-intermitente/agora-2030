'use client'

import React, { FC } from 'react'
import {
  Navbar as NavbarUi,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from '@nextui-org/react'
import { menuItems } from './utils'
import { Button } from '@/components/atoms/button'
import Image from 'next/image'

export const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <NavbarUi
      className='shadow-lg'
      height='78px'
      isBlurred={false}
      maxWidth='xl'
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <Link href='/'>
            <Image
              alt='logo`'
              src='/assets/logos/logo-light.svg'
              width={150}
              height={50}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex' justify='end'>
        {menuItems.map((item, idx) => (
          <NavbarItem key={`${item.label}-${idx}`}>
            <Link color='foreground' href={item.href}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button href='#' size='sm'>
            Donate
          </Button>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, idx) => (
          <NavbarMenuItem key={`${item.label}-${idx}`}>
            <Link className='w-full' color='foreground' href={item.href}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarUi>
  )
}
