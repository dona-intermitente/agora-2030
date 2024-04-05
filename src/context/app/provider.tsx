import { AppContext } from './context'
import { toast, Toaster } from 'react-hot-toast'
import { FC, ReactNode } from 'react'

type AppContextProviderProps = {
  children: ReactNode
}

export const AppContextProvider: FC<AppContextProviderProps> = ({
  children
}) => {
  const context = {
    toast: toast
  }

  return (
    <AppContext.Provider value={context}>
      {children}
      <Toaster />
    </AppContext.Provider>
  )
}
