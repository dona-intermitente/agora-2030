import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input'
import { Card, CardBody } from '@nextui-org/react'
import React, { FC } from 'react'

export const Form: FC = () => {
  return (
    <Card className='dark bg-accent'>
      <CardBody className='content py-24'>
        <h1>Subscribe to Our Newsletter</h1>
        <form className='flex flex-col gap-10'>
          <div className='grid md:grid-cols-2 md:gap-10 items-center'>
            <div>
              <Input type='text' label='First Name' />
              <Input type='text' label='Last Name' />
              <Input type='email' label='Email' />
            </div>
            <div>
              <Input type='text' label='Business/Trade' />
              <Input type='text' label='Company' />
              <Input type='email' label='Country' />
            </div>
          </div>
          <div>
            <Button>Submit</Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
