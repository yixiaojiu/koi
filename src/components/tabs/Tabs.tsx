import { Box } from '@mui/material'
import React from 'react'

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
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // 事件委托
    if (props.change) {
      props.change(+(event.target as HTMLDivElement).dataset.index!)
    }
  }
  return (
    <div className="flex gap-3" onClick={handleClick} data-index="">
      {props.tabArr.map((item, index) => {
        return (
          <Box
            key={item.id}
            className="h-8 leading-8 text-center px-3 cursor-pointer rounded-md"
            data-index={index}
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
