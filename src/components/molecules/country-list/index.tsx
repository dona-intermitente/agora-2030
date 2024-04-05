import { Autocomplete } from '@/components/atoms/autocomplete'
import { CountryListDataType } from '@/types/country-list'
import { OptionDataType } from '@/types/opction'
import country from 'country-list-js'
import Image from 'next/image'
import React, { FC, Key } from 'react'

interface CountieListProps {
  value: string
  onChange: (country: string) => void
}

export const CountryList: FC<CountieListProps> = ({ value, onChange }) => {
  const countries = Object.entries(country.all).map(([key, value]) => {
    return { label: (value as CountryListDataType).name, value: key }
  })

  const iconItem = (option: OptionDataType) => (
    <Image
      width={20}
      height={10}
      alt={option.label}
      src={`https://flagcdn.com/w20/${option.value.toLowerCase()}.png`}
    />
  )

  const handleCountryChange = (key: Key) => {
    const country = countries.find((country) => country.value === key)
    onChange(country?.label ?? '')
  }

  return (
    <Autocomplete
      inputValue={value}
      aria-labelledby='country'
      iconItem={iconItem}
      name='country'
      onSelectionChange={handleCountryChange}
      options={countries}
      label='Country'
    />
  )
}
