'use client'

import { categoriesEnum } from '@/commons/enums'
import { Categories } from '@/components/molecules/categories'
import { PostList } from '@/components/molecules/post-list'
import { api } from '@/service'
import { useState } from 'react'

export const PostsPanel = () => {
  const [filter, setFilter] = useState<keyof typeof categoriesEnum>(
    categoriesEnum.ALL
  )
  const { posts, isFetching } = api.post.useGet({
    category: filter === categoriesEnum.ALL ? undefined : filter
  })

  return (
    <section>
      <div className='dark mx-auto text-center'>
        <Categories setFilter={setFilter} />
      </div>
      <div className='my-20'>
        <PostList loading={isFetching} posts={posts} />
      </div>
    </section>
  )
}
