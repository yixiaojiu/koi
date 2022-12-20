import type { childrenProps } from '@/shared/types/utils'
import { Box } from '@mui/material'

export const ContainedRoundButton = (props: childrenProps) => (
  <Box
    component="button"
    className="rounded-full center text-slate-100 text-sm"
    sx={{
      padding: '6px 22px',
      fontFamily: 'SmileySans',
      backgroundColor: 'background.paper',
    }}
  >
    {props.children}
  </Box>
)
