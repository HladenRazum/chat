import { useEffect, useState } from 'react'

const KEY_PREFIX = 'chat-app-'

export const useLocalStorage = (key: string, initialValue: unknown) => {
  const prefixedKey = KEY_PREFIX + key

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
    if (jsonValue != null) {
      return JSON.parse(jsonValue)
    }
    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [value, prefixedKey])

  return [value, setValue]
}
