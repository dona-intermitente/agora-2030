import { GetPostType, PostDataType } from '@/types/post'
import { useQuery } from '@tanstack/react-query'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const key = process.env.NEXT_PUBLIC_MOCKAROO_KEY

const get = async ({ category, limit }: GetPostType) => {
  const params: Record<string, string> = {
    key: key ?? '',
    limit: limit ?? '',
    category: category ?? ''
  }

  const url = `${baseUrl}.json?` + new URLSearchParams(params)

  const response = await fetch(url)
  const data = await response.json()
  if (response.ok) {
    return data
  }
  if (data.error) {
    throw new Error(data.error)
  }
}

export const getById = async (id: number) => {
  const response = await fetch(`${baseUrl}/${id}.json?key=${key}`)
  return await response.json()
}

export const post = {
  useGetById: (id: number) => {
    const {
      data: post,
      isLoading,
      isError,
      error,
      isFetching
    } = useQuery<PostDataType>({
      queryKey: ['postById', id],
      queryFn: () => getById(id),
      initialData: undefined
    })
    return { post, isLoading, isError, error, isFetching }
  },
  useGet: ({ category, limit }: GetPostType) => {
    const {
      data: posts,
      isLoading,
      isError,
      error,
      isFetching
    } = useQuery<PostDataType[]>({
      queryKey: ['posts', category, limit],
      queryFn: () => get({ category, limit }),
      initialData: []
    })
    return { posts, isLoading, isError, error, isFetching }
  }
}
