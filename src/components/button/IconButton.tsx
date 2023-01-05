import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material'

interface Props {
  onClick: () => void
  icon: string
  sx?: SxProps<Theme>
  className?: string
  iconSize?: 'large' | 'normal'
}

export const IconButton = (props: Props) => {
  return (
    <Box
      onClick={props.onClick}
      className={` w-10 h-10 center cursor-pointer ${
        props.className ? props.className : ''
      } `}
      sx={{
        color: 'text.primary',
        ...props.sx,
      }}
    >
      <div
        className={`${props.icon} ${
          props.iconSize === 'large' ? 'w-8 h-8' : 'w-6 h-6'
        }`}
      ></div>
    </Box>
  )
}
