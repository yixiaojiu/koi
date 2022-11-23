import { Box } from '@mui/material'

interface Props {
  onClick: () => void
  icon: string
}

export const IconButton = (props: Props) => {
  return <Box onClick={props.onClick} className='w-10 h-10 center cursor-pointer' sx={{
    color: 'text.primary',
  }}>
    <div className={`${props.icon} w-8 h-8`}></div>
  </Box>
}
