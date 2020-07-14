import { useState } from "react"

// React Hook for using localStorage. Similar to useState hook
const useLocalStorage = <T>(key: string, initialData: T) => {
    const [storedData, setStoredData] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : initialData
        } catch (error) {
            return initialData
        }
    })

    const setter = (data: T) => {
        try {
            setStoredData(data)
            localStorage.setItem(key, JSON.stringify(data))
        } catch (error) {
            console.error(error)
        }
    }

    return [storedData, setter]
}

export default useLocalStorage
