import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, { FC } from 'react'
import Slider from 'react-slick'
import { Image } from '@nextui-org/react'

type SlideProps = {
  items: { alt: string; img: string }[]
}

export const Slide: FC<SlideProps> = ({ items }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    infinite: true,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow: 5,
    speed: 2000
  }

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <Image
          key={index}
          radius='none'
          width='100%'
          height='100%'
          alt={item.alt}
          src={item.img}
          className='p-10'
        />
      ))}
    </Slider>
  )
}
