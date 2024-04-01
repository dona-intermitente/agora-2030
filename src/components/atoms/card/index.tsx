import React, { FC } from 'react'
import { Card as CardUi, CardBody, Image, CardFooter } from '@nextui-org/react'
import Link from 'next/link'
import { cn } from '@/lib/cn'

type CardProps = {
  description: string
  href: string
  hoverColor?: string
  img: string
  title: string
}

export const Card: FC<CardProps> = ({
  description,
  href,
  hoverColor = '',
  img,
  title
}) => {
  return (
    <Link href={href}>
      <CardUi
        className={cn('h-full', hoverColor, {
          'transition ease-in-out duration-300 hover:text-white': hoverColor
        })}>
        <CardBody className='flex-none p-0'>
          <Image
            alt={title}
            className='object-cover'
            isZoomed
            radius='lg'
            src={img}
          />
        </CardBody>
        <CardFooter radioGroup='lg' className='flex-col h-full items-start p-8'>
          <h3>{title}</h3>
          <p>{description}</p>
        </CardFooter>
      </CardUi>
    </Link>
  )
}
