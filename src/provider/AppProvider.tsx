import React, { createContext, useEffect, useState } from 'react'
import { IChildren } from '../interfaces/children'
import { UserInterface } from '../interfaces/IUser'
import { defaultTheme } from '../themes/default'

interface AppContextInterface {
  isSignedIn: boolean
  setIsSignedIn: (value: any) => void
  user: UserInterface | null
  setUser: (value: any) => void
  logoutAccunt: () => void
  menuIsVisible: boolean
  setMenuIsVisible: (value: any) => void
}

const AppContext = createContext<AppContextInterface>({} as AppContextInterface)

const AppProvider: React.FC<IChildren> = ({ children }): JSX.Element => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(true)

  const [user, setUser] = useState<UserInterface | null>(null)

  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)

  function logoutAccunt() {
    localStorage.removeItem('userInfo')
    setUser(null)
  }

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo')
    const userInfo: UserInterface = storedUserInfo
      ? JSON.parse(storedUserInfo)
      : null

    if (storedUserInfo) {
      setUser(userInfo)
      console.log('Dados do user:', userInfo)
    } else {
      console.log('O user não existe')
    }
  }, [])

  return (
    <AppContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        user,
        setUser,
        logoutAccunt,
        menuIsVisible,
        setMenuIsVisible
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
