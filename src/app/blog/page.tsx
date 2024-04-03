import { Posts } from '@/components/organisms/post'
import { Card, CardBody, Image } from '@nextui-org/react'

export default function Blog() {
  return (
    <div className='content gap-16 flex flex-col my-10'>
      <header className='flex flex-col md:flex-row gap-10'>
        <Card className='dark bg-secondary min-h-80 md:min-h-0'>
          <CardBody className='justify-center p-10 lg:p-20'>
            <small>OUR BLOG</small>
            <h1>Learn About Our Latest Articles and News</h1>
          </CardBody>
        </Card>
        <div className='relative'>
          <Image
            src='/assets/images/blog/header-blog.png'
            alt='blog'
            radius='lg'
            width='100%'
            height='100%'
          />
        </div>
      </header>
      <Posts />
    </div>
  )
}
