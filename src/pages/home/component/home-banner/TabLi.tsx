import { Box } from '@mui/material'
import type { ReactNode } from 'react'

export const TabLi = (props: { children: ReactNode; active: boolean; onClick: () => void }) => (
  <Box
    component="li"
    className="cursor-pointer font-bold py-2"
    sx={{
      color: props.active ? 'background.paper' : 'rgb(209 213 219)',
      borderBottom: props.active ? '2px solid' : '',
      borderBottomColor: 'background.paper',
    }}
    onClick={props.onClick}
  >
    {props.children}
  </Box>
)
