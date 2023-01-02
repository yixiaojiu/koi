import { useQueryClient } from '@tanstack/react-query'
import { HomeData } from '@/service/types/getHome'
import { Box } from '@mui/material'

interface Props {
  activeIndex: number
}

export const TabInfo = (props: Props) => {
  const queryClient = useQueryClient()
  const tabInfo = queryClient.getQueryData<HomeData>(['home'])!.perweeks[props.activeIndex]
  return (
    <div className="w-full py-3">
      <ul className="flex gap-3 flex-wrap ">
        {tabInfo.map((item) => {
          return (
            <Box
              key={item.id}
              component="li"
              className="cursor-pointer rounded-md px-2 py-1 transition hover:brightness-95"
              sx={{
                backgroundColor: 'background.default',
              }}
            >
              <Box component="p" className="text-sm" sx={{ color: 'secondary.light' }}>
                {item.title}
              </Box>
              <Box component="span" className="text-xs" sx={{ color: 'text.secondary' }}>
                {item.season}
              </Box>
            </Box>
          )
        })}
      </ul>
    </div>
  )
}
