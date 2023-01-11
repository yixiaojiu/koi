import { ChildrenProps } from '@/shared/types/utils'
import { Box } from '@mui/material'

export const ScrollbarBox = (props: ChildrenProps) => (
  <Box
    className="h-full overflow-x-hidden overflow-y-auto"
    sx={{
      backgroundColor: 'background.default',
    }}
  >
    {props.children}
  </Box>
)
