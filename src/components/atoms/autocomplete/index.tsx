import { OptionDataType } from '@/types/opction'
import {
  AutocompleteItem,
  Autocomplete as AutocompleteUi,
  AutocompleteProps as AutocompleteUiProps
} from '@nextui-org/react'
import React, { FC } from 'react'

type UiProps = Omit<AutocompleteUiProps, 'children'>

interface AutocompleteProps extends UiProps {
  options: OptionDataType[]
  iconItem: (value: OptionDataType) => React.ReactNode
}

export const Autocomplete: FC<AutocompleteProps> = ({
  options,
  iconItem,
  ...props
}) => {
  return (
    <AutocompleteUi {...props} size='lg' variant='underlined'>
      {options.map((option) => (
        <AutocompleteItem
          key={option.value}
          value={option.value}
          startContent={iconItem(option)}>
          {option.label}
        </AutocompleteItem>
      ))}
    </AutocompleteUi>
  )
}
