import { Posts } from '@/components/organisms/post'
import { Card, CardBody, Image } from '@nextui-org/react'

export default function Blog() {
  return (
    <div className='container'>
      <div className='grid grid-cols-5 gap-10'>
        <Card className='col-span-3 dark bg-secondary'>
          <CardBody className='p-20'>
            <small>OUR BLOG</small>
            <h1>Learn About Our Latest Articles and News</h1>
          </CardBody>
        </Card>
        <div className='relative col-span-2'>
          <Image
            src='/assets/images/blog/header-blog.png'
            alt='blog'
            radius='lg'
            width='100%'
            height='100%'
          />
        </div>
      </div>
      <Posts />
    </div>
  )
}
