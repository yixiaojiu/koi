import type { RefObject } from 'react'

export interface ClassNameProps {
  className?: string
}

// 覆盖类型
export type Override<P, S> = Omit<P, keyof S> & S

export type NodeRef<T = HTMLElement> = RefObject<T>
