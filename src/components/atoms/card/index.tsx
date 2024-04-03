import React, { FC } from 'react'
import {
  Card as CardUi,
  CardBody,
  Image,
  CardFooter,
  CardHeader,
  Chip
} from '@nextui-org/react'
import Link from 'next/link'
import { cn } from '@/lib/cn'

type CardProps = {
  description: string
  header?: string
  href: string
  hoverColor?: string
  img: string
  title: string
}

export const Card: FC<CardProps> = ({
  description,
  header,
  href,
  hoverColor = '',
  img,
  title
}) => {
  return (
    <Link href={href}>
      <CardUi
        className={cn('h-full w-fit', hoverColor, {
          'transition ease-in-out duration-300 hover:text-white': hoverColor
        })}>
        {header && (
          <CardHeader className='absolute dark top-1 flex-col !items-start z-10'>
            <Chip>{header}</Chip>
          </CardHeader>
        )}
        <CardBody className='flex-none p-0'>
          <Image
            alt={title}
            className='object-cover z-0'
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
