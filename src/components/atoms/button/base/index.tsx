import React, { FC } from 'react'
import { Button as ButtonUI, ButtonProps } from '@nextui-org/react'

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <ButtonUI
      {...props}
      className={`text-medium font-semibold px-8 ${className}`}
      color='primary'
      radius='full'>
      {children}
    </ButtonUI>
  )
}
