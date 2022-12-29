import { useEffect } from 'react'

export const useMounted = (callback: () => void) => {
  useEffect(callback, [])
}

export const delay = (delay: number) =>
  new Promise((resolved) => {
    setTimeout(() => {
      resolved()
    }, delay)
  })
