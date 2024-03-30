import { postDataType } from '@/types/post'
import { useQuery } from '@tanstack/react-query'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const key = process.env.NEXT_PUBLIC_MOCKAROO_KEY

const get = async () => {
  const response = await fetch(`${baseUrl}.json?key=${key}`)
  return await response.json()
}

const getById = async (id: number) => {
  const response = await fetch(`${baseUrl}/${id}.json?key=${key}`)
  return await response.json()
}

export const post = {
  useGetById: (id: number) => {
    const {
      data: posts,
      isLoading,
      isError,
      error,
      isFetching
    } = useQuery<postDataType>({
      queryKey: ['postById'],
      queryFn: () => getById(id),
      initialData: undefined,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      retryOnMount: false
    })
    return { posts, isLoading, isError, error, isFetching }
  },
  useGet: () => {
    const {
      data: posts,
      isLoading,
      isError,
      error,
      isFetching
    } = useQuery<postDataType[]>({
      queryKey: ['posts'],
      queryFn: get,
      initialData: [],
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      retryOnMount: false
    })
    return { posts, isLoading, isError, error, isFetching }
  }
}
