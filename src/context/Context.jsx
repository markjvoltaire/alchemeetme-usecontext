import { useContext, createContext, useState } from 'react'

const UserContext = createContext()

function UserProvider({ children }) {
  const [user, setUser] = useState({})

  const userValue = { user, setUser }

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser must be defined within an UserContext Provider')
  }
  return context
}

export { UserProvider, useUser }
