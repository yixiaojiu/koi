import { useEffect } from 'react'

export const useMounted = (callback: () => void | (() => void)) => {
  useEffect(callback, [])
}
