import React, { FC } from 'react'
import ArrowUp from '@public/assets/icons/arrow-up.svg'
import { Link, LinkProps } from '@nextui-org/react'

export const LinkButton: FC<LinkProps> = ({
  children,
  color = 'secondary',
  ...props
}) => {
  return (
    <Link
      {...props}
      anchorIcon={
        <ArrowUp className='ms-2 transition ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 duration-300' />
      }
      className='font-bold group'
      color={color}
      showAnchorIcon>
      {children}
    </Link>
  )
}
