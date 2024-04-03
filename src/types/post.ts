import { categoriesEnum } from '@/commons/enums'

export type PostDataType = {
  id: number
  title: string
  description: string
  image: string
  first_name: string
  last_name: string
  category: keyof typeof categoriesEnum
  content: string
}
