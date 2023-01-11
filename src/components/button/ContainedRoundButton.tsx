import type { ChildrenProps } from '@/shared/types/utils'
import { Box } from '@mui/material'

interface Props extends ChildrenProps {
  onClick?: () => void
}

export const ContainedRoundButton = (props: Props) => (
  <Box
    component="button"
    onClick={props.onClick}
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
