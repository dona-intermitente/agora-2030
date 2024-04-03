'use client'

import { categoriesEnum } from '@/commons/enums'
import { categoriesFormat } from '@/commons/format'
import { Card } from '@/components/atoms/card'
import { CardSkeleton } from '@/components/atoms/card/skeleton'
import { Categories } from '@/components/molecules/categories'
import { api } from '@/service'
import { useState } from 'react'

export const Posts = () => {
  const [filter, setFilter] = useState()
  const { posts, isFetching } = api.post.useGet(
    filter === categoriesEnum.ALL ? '' : filter
  )

  return (
    <section>
      <div className='dark mx-auto text-center'>
        <Categories setFilter={setFilter} />
      </div>
      <div className='gap-8 grid sm:grid-cols-2 md:grid-cols-3 justify-center my-20'>
        {isFetching ? (
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
              href={`/blog/post?id=${post.id}`}
              img={post.image}
              key={post.id}
              title={post.title}
            />
          ))
        )}
      </div>
    </section>
  )
}
