import { extendVariants, Button as ButtonUI } from '@nextui-org/react'

export const Button = extendVariants(ButtonUI, {
  variants: {
    color: {
      primary: 'data-hover:bg-primary-600'
    },
    size: {
      sm: 'text-sm h-7'
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
