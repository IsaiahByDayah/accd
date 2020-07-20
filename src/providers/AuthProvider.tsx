import React, { FC, createContext, useState, useContext, useEffect } from "react"
import firebase from "firebase"

interface AuthContext {
    user?: firebase.User

    login: () => void
    logout: () => void
}

const AuthContext = createContext<AuthContext>({
    login: () => null,
    logout: () => null,
})

const AuthProvider: FC = ({ children }) => {
    const [user, setUser] = useState<firebase.User>()

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(u => {
            setUser(u ?? undefined)
        })
        return () => unsubscribe()
    }, [])

    const login = () => {
        if (process.env.NODE_ENV === "development") firebase.auth().signInAnonymously()
    }

    const logout = () => {
        firebase.auth().signOut()
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)
