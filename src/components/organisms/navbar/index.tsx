'use client'

import React, { FC, useState } from 'react'
import {
  Navbar as NavbarUi,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from '@nextui-org/react'
import { menuItems } from './utils'
import { Button } from '@/components/atoms/button'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Navbar: FC = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          <NavbarItem
            key={`${item.label}-${idx}`}
            isActive={pathname?.includes(item.href)}>
            <Link href={item.href}>{item.label}</Link>
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
            <Link className='w-full' href={item.href}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarUi>
  )
}
