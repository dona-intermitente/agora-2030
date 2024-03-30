'use client'

import { Card } from '@/components/atoms/card'
import { Categories } from '@/components/molecules/categories'
import { api } from '@/service'

export const Posts = () => {
  const { posts } = api.post.useGet()

  return (
    <section>
      <Categories />
      <div className='gap-6 grid grid-cols-3'>
        {posts?.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            img={post.image}
            description=''
            href=''
          />
        ))}
      </div>
    </section>
  )
}
