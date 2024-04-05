import { extendVariants, Button as ButtonUI } from '@nextui-org/react'

export const Button = extendVariants(ButtonUI, {
  variants: {
    color: {
      primary: 'data-hover:bg-primary-600'
    },
    size: {
      sm: 'text-sm h-7'
    },
    isDisabled: {
      true: 'opacity-50 cursor-not-allowed'
    }
  },
  defaultVariants: {
    radius: 'full',
    color: 'primary'
  },
  compoundVariants: [
    {
      class: 'font-semibold px-8'
    }
  ]
})
