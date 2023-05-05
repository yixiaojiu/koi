import type { PropsWithChildren } from 'react'

export const OutLinedRoundButton = (props: PropsWithChildren) => (
  <button className="center text-slate-100 text-sm rounded-full border border-slate-100 hover:border-cyan-500 px-[22px] py-[6px]">
    {props.children}
  </button>
)
