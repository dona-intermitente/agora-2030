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
      color={color}
      anchorIcon={<ArrowUp className='ms-2' />}
      className='font-bold'
      showAnchorIcon>
      {children}
    </Link>
  )
}
