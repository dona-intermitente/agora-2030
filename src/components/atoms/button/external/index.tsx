import { Link, LinkProps } from '@nextui-org/react'
import React, { FC } from 'react'

export const ExternalButton: FC<LinkProps> = ({
  children,
  color = 'foreground',
  ...props
}) => {
  return (
    <Link {...props} color={color} isExternal>
      {children}
    </Link>
  )
}
