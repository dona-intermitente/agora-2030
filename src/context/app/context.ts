import { createContext } from 'react'
import { toast } from 'react-hot-toast'

type CreateContextDataType = {
  toast?: typeof toast
}

export const AppContext = createContext<CreateContextDataType>({
  toast: undefined
})
