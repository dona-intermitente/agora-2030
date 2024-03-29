import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input'
import { Card, CardBody } from '@nextui-org/react'
import React, { FC } from 'react'

export const Form: FC = () => {
  return (
    <Card className='dark bg-accent'>
      <CardBody className='container mx-auto py-24'>
        <form>
          <h1>Subscribe to Our Newsletter</h1>
          <div className='grid grid-cols-2 gap-10 items-center'>
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
          <Button>Submit</Button>
        </form>
      </CardBody>
    </Card>
  )
}
