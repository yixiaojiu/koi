import type { MouseEventHandler } from 'react'

export const delay = (delay: number) =>
  new Promise((resolved) => {
    setTimeout(() => {
      resolved(1)
    }, delay)
  })

export const stopPropagation: MouseEventHandler = (e) => {
  e.stopPropagation()
}
