import { Box } from '@mui/material'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const AppMainContainer = (props: Props) => {
  return <Box className="flex-1 rounded-tl-6 overflow-y-scroll" sx={{
    backgroundColor: 'background.default',
    height: 'calc(100vh - 3rem);',
  }}>{props.children}</Box>
}
