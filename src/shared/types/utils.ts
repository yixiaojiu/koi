import type { ReactNode } from 'react'

export interface childrenProps {
  children: ReactNode
}

// 覆盖类型
export type Override<P, S> = Omit<P, keyof S> & S
