import { useEffect } from 'react'

export const useMounted = (callback: () => void) => {
  useEffect(callback, [])
}
