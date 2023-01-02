import { Box } from '@mui/material'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const AppMainContainer = (props: Props) => {
  return (
    <Box
      className="flex-1 relative rounded-tl-6"
      sx={{
        height: 'calc(100vh - 3rem);',
      }}
    >
      {props.children}
    </Box>
  )
}
