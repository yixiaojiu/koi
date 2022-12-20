import { Box } from '@mui/material'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const AppMainContainer = (props: Props) => {
  return (
    <Box
      className="flex-1 relative rounded-tl-6 overflow-y-auto overflow-x-hidden"
      sx={{
        backgroundColor: 'background.default',
        height: 'calc(100vh - 3rem);',
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: 15,
          backgroundColor: 'text.secondary',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'text.primary',
        },
      }}
    >
      {props.children}
    </Box>
  )
}
