import { childrenProps } from '@/shared/types/utils'
import { Box } from '@mui/material'

export const ScrollbarBox = (props: childrenProps) => (
  <Box
    className="h-full overflow-x-hidden overflow-y-auto"
    sx={{
      backgroundColor: 'background.default',
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
