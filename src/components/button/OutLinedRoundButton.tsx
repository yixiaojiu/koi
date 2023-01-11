import type { ChildrenProps } from '@/shared/types/utils'
import { Box } from '@mui/material'

export const OutLinedRoundButton = (props: ChildrenProps) => (
  <Box
    component="button"
    className="center text-slate-100 text-sm rounded-full border border-slate-100 hover:border-cyan-500"
    sx={{
      padding: '6px 22px',
      fontFamily: 'SmileySans',
    }}
  >
    {props.children}
  </Box>
)
