import React, { FC } from 'react'
import ArrowUp from '/public/assets/icons/arrow-up.svg'
import { Link, LinkProps } from '@nextui-org/react'

export const LinkButton: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link
      {...props}
      anchorIcon={<ArrowUp class='ms-2' />}
      className='font-bold text-secondary'
      showAnchorIcon>
      {children}
    </Link>
  )
}
