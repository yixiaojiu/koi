import { Box } from '@mui/material'

interface Props {
  activeIndex?: number
  tabArr: {
    id: string | number
    tabName: string
    [key: string]: any
  }[]
  change?: (activeIndex: number) => void
}

export const Tabs = (props: Props) => {
  return (
    <div className="flex gap-3">
      {props.tabArr.map((item, index) => {
        return (
          <Box
            key={item.id}
            className="h-8 leading-8 text-center px-3 cursor-pointer rounded-md"
            onClick={() => props.change?.(index)}
            sx={{
              color: props.activeIndex === index ? 'white' : 'text.secondary',
              backgroundColor: props.activeIndex === index ? 'background.paper' : '',
              '&:hover': {
                color: 'white',
                backgroundColor: 'background.paper',
              },
            }}
          >
            {item.tabName}
          </Box>
        )
      })}
    </div>
  )
}
