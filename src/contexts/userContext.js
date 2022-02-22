import { createContext } from 'react'

export const UserContext = createContext({
    user: { isLoggedIn: false },
    setUser: (token) => { },
});