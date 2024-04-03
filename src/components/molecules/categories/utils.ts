import { categoriesFormat } from '@/commons/format'

export const categorieItems = Object.entries(categoriesFormat).map(
  ([key, value]) => ({
    key,
    title: value
  })
)
