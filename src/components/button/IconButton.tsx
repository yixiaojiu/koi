import { Box } from '@mui/material'
import type { MouseEventHandler } from 'react'
import type { SxProps, Theme } from '@mui/material'

type IconSize = 'large' | 'normal'

interface IconButtonBaseProps {
  icon: string
  onClick?: MouseEventHandler
  iconSize?: IconSize
  className?: string
}

interface IconButtonProps extends IconButtonBaseProps {
  sx?: SxProps<Theme>
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={` w-10 h-10 center cursor-pointer text-[var(--font-color)] ${props.className ? props.className : ''} `}
    >
      <IconButtonBase icon={props.icon} iconSize={props.iconSize} />
    </button>
  )
}

export const IconButtonBase = (props: IconButtonBaseProps) => (
  <div
    onClick={props.onClick}
    className={`cursor-pointer ${props.icon} ${props.className ? props.className : ''} ${
      props.iconSize === 'large' ? 'w-8 h-8' : 'w-6 h-6'
    }`}
  ></div>
)
