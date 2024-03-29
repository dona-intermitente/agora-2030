import React, { FC } from 'react'
import { Card as CardUi, CardBody, Image, CardFooter } from '@nextui-org/react'
import Link from 'next/link'

type CardProps = {
  description: string
  href: string
  img: string
  title: string
}

export const Card: FC<CardProps> = ({ description, href, img, title }) => {
  return (
    <Link href={href}>
      <CardUi className='h-full'>
        <CardBody className='flex-none p-0'>
          <Image
            isZoomed
            radius='lg'
            width='100%'
            alt={title}
            className='w-full object-cover'
            src={img}
          />
        </CardBody>
        <CardFooter className='flex-col gap-4 h-full p-8'>
          <h3>{title}</h3>
          <p>{description}</p>
        </CardFooter>
      </CardUi>
    </Link>
  )
}
