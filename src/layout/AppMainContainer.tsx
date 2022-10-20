import { Box } from '@mui/material'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const AppMainContainer = (props: Props) => {
  return <Box className="flex-1">{props.children}</Box>
}
