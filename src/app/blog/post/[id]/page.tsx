import { categoriesFormat } from '@/commons/format'
import { Card, CardFooter } from '@nextui-org/react'
import { Divider } from '@/components/atoms/divider'
import { PostsRecomended } from '@/components/organisms/post-recommended'
import { getById } from '@/service/post'
import Image from 'next/image'

export default async function Post({
  params: { id }
}: Readonly<{ params: { id: string } }>) {
  const post = await getById(parseInt(id))

  return (
    <>
      <Card className='dark'>
        <CardFooter className='content flex-col md:flex-row gap-5 items-start py-10 lg:py-20'>
          <header className='md:flex-1'>
            <small>{categoriesFormat[post.category]}</small>
            <h1>{post.title}</h1>
          </header>
          <div className='md:flex-1'>
            <Divider />
            <p>{post.description}</p>
          </div>
        </CardFooter>
      </Card>
      <article className='content-small gap-16 flex flex-col my-20'>
        <blockquote className='border-l-8 ps-4'>
          {post.first_name} {post.last_name}
        </blockquote>
        <Image
          alt={post.title}
          className='rounded-xl'
          src={post.image}
          width={405}
          height={264}
        />
        {post.content}
      </article>
      <div className='content my-20'>
        <Divider />
        <PostsRecomended category={post.category} />
      </div>
    </>
  )
}
