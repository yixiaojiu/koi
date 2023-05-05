import type { PropsWithChildren } from 'react'

export const ScrollbarBox = (props: PropsWithChildren) => (
  <div className="h-full overflow-x-hidden overflow-y-auto bg-[var(--aside-bg-color)]">{props.children}</div>
)
