import { categoriesFormat } from '@/commons/format'
import { Card } from '@/components/atoms/card'
import { CardSkeleton } from '@/components/atoms/card/skeleton'
import { PostDataType } from '@/types/post'
import { FC } from 'react'

type PostListProps = {
  loading: boolean
  posts: PostDataType[]
}

export const PostList: FC<PostListProps> = ({ loading, posts }) => {
  return (
    <div className='gap-8 grid sm:grid-cols-2 md:grid-cols-3 justify-center'>
      {loading ? (
        <CardSkeleton />
      ) : !posts.length ? (
        <h5 className='sm:col-span-2 md:col-span-3 text-center text-balance text-primary'>
          No existen artículos con esta categoría, intenta filtrar con otra
        </h5>
      ) : (
        posts.map((post) => (
          <Card
            description={post.description}
            header={categoriesFormat[post.category]}
            href={`/blog/post/${post.id}`}
            img={post.image}
            key={post.id}
            title={post.title}
          />
        ))
      )}
    </div>
  )
}
