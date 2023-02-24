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

type Fn = (...args: any) => any
export function debounce<T extends Fn>(fn: T, wait?: number) {
  let timer: NodeJS.Timeout
  return function (this: any, ...args: Parameters<T>) {
    const _this = this
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(_this, args)
    }, wait)
  }
}

export function thorttle<T extends Fn>(fn: T, wait?: number) {
  let timer: NodeJS.Timeout | null
  return function (this: any, ...args: Parameters<T>) {
    const _this = this
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn.apply(_this, args)
      }, wait)
    }
  }
}
