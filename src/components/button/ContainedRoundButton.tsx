import type { PropsWithChildren } from 'react'

interface ContainedRoundButtonProps {
  onClick?: () => void
}

export const ContainedRoundButton = ({ children, onClick }: PropsWithChildren<ContainedRoundButtonProps>) => (
  <button onClick={onClick} className="rounded-full center text-slate-100 text-sm bg-[var(--primary-color)] px-[22px]">
    {children}
  </button>
)
