import { PostsPanel } from '@/components/organisms/post-panel'
import { Card, CardBody } from '@nextui-org/react'
import Image from 'next/image'

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
        <div>
          <Image
            alt='blog'
            className='w-full rounded-xl'
            height={447}
            priority
            src='/assets/images/blog/header-blog.png'
            width={593}
          />
        </div>
      </header>
      <PostsPanel />
    </div>
  )
}
