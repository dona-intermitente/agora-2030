'use client'

import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input'
import { CountryList } from '@/components/molecules/country-list'
import { Card, CardBody } from '@nextui-org/react'
import React, { FC, useState } from 'react'
import { INITIAL_STATE } from './utils'
import { sendEmail } from '@/utils/send-email'
import { useForm, Controller } from 'react-hook-form'
import { FormDataType } from '@/types/form'
import { useApp } from '@/hooks/use-app'

export const Form: FC = () => {
  const { toast } = useApp()
  const [loaidng, setLoading] = useState(false)
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { isValid }
  } = useForm<FormDataType>({
    defaultValues: INITIAL_STATE
  })

  const onSubmit = (data: FormDataType) => {
    setLoading(true)
    sendEmail(data)
      .then(() => {
        toast?.success('successful subscription')
        setValue('country', '')
        reset()
      })
      .catch(() => {
        toast?.error('Subscription error. try again')
      })
      .finally(() => setLoading(false))
  }

  return (
    <Card className='dark bg-accent'>
      <CardBody className='content py-24'>
        <h1>Subscribe to Our Newsletter</h1>
        <form
          className='flex flex-col gap-10'
          onSubmit={handleSubmit(onSubmit)}>
          <div className='grid md:grid-cols-2 md:gap-10 items-center'>
            <div className='flex flex-col gap-2'>
              <Controller
                name='first_name'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input label='First Name' type='text' {...field} ref={null} />
                )}
              />
              <Controller
                name='last_name'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input label='Last Name' type='text' {...field} ref={null} />
                )}
              />
              <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input label='Email' type='email' {...field} ref={null} />
                )}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <Controller
                name='business_trade'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    label='Business/Trade'
                    type='text'
                    {...field}
                    ref={null}
                  />
                )}
              />
              <Controller
                name='company'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input label='Company' type='text' {...field} ref={null} />
                )}
              />
              <Controller
                name='country'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CountryList
                    value={field.value}
                    onChange={(country) => {
                      field.onChange(country)
                    }}
                  />
                )}
              />
            </div>
          </div>
          <div>
            <Button type='submit' isDisabled={!isValid} isLoading={loaidng}>
              Submit
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
