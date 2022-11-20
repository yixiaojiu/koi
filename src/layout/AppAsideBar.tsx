import { Box, Typography } from '@mui/material'
import { asideBarItems } from '@/layout/constant'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { asideBarStore } from '@/store/asideBar.store'
import { useState } from 'react'

export const AppAsideBar = observer(() => {
  const navigate = useNavigate()
  const [asideBar] = useState(() => asideBarStore)

  const handleClick = (path: string) => {
    navigate(path)
  }

  const AsideBar = asideBarItems.map((item, index) => {
    return <li className='h-12 px-6 flex items-center cursor-pointer' key={item.path} onClick={() => handleClick(item.path)}>
      {/* 这里的icon类名没有导入进去 */}
    <Box className={`${item.icon} h-5 w-5`} sx={{
      color: index === asideBar.pointerIndex ? '#fff' : 'text.secondary',
    }} />
    <Typography variant='subtitle1' sx={{
      color: 'text.secondary',
      fontWeight: '500',
      marginLeft: '1.75rem',
    }}>{item.name}</Typography>
  </li>
  })

  return <Box className="w-[240px]">
    <Box className='w-full rounded-r-6' sx={{
      backgroundColor: 'background.default',
      height: 'calc(100vh - 6rem);',
    }}>
      <Typography variant='h3' className='h-30 text-center' sx={{
        color: 'text.primary',
        fontSize: '30px',
        lineHeight: '120px',
        fontWeight: '700',
      }}>Koi</Typography>
      <ul className='relative'>
        <motion.li className='absolute top-0 left-0 h-12 w-[58px]' animate={{ y: asideBar.pointerIndex * 48 }}>
          <Box className='w-full h-full rounded-r-3' sx={{
            backgroundColor: 'background.paper',
          }} ></Box>
        </motion.li>
        {AsideBar}
      </ul>
    </Box>
  </Box>
})
