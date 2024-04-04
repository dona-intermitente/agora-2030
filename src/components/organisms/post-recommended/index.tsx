'use client'

import { categoriesEnum } from '@/commons/enums'
import { PostList } from '@/components/molecules/post-list'
import { api } from '@/service'
import { FC } from 'react'

type PostsRecomendedProps = {
  category?: keyof typeof categoriesEnum
}

export const PostsRecomended: FC<PostsRecomendedProps> = ({ category }) => {
  const { posts, isFetching } = api.post.useGet({ category, limit: 3 })

  return <PostList loading={isFetching} posts={posts} />
}
