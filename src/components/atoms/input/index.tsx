import { Input as InputUi, InputProps } from '@nextui-org/react'
import React, { FC } from 'react'

export const Input: FC<InputProps> = ({ children, ...props }) => {
  return <InputUi {...props} variant='underlined' />
}
