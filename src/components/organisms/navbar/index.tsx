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
import Logo from '/public/assets/logos/logo-light.svg'
import { menuItems } from './utils'
import { Button } from '@/components/atoms/button'

export const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <NavbarUi
      className=' bg-white'
      isBlurred={false}
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link href='/'>
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='end'>
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
