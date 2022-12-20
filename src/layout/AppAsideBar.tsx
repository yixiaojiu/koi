import { Box, Typography } from '@mui/material'
import { asideBarItems } from '@/layout/constant'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { asideBarStore } from '@/store/asideBar.store'
import { useState } from 'react'
import { WEB_NAME } from '@/shared/constant'

export const AppAsideBar = observer(() => {
  const navigate = useNavigate()
  const [asideBar] = useState(() => asideBarStore)

  const handleRouterClick = (path: string) => {
    navigate(path)
  }

  const AsideBar = asideBarItems.map((item, index) => {
    return (
      <li
        className="h-12 px-6 flex items-center cursor-pointer"
        key={item.path}
        onClick={() => handleRouterClick(item.path)}
      >
        <Box
          className={`${item.icon} h-5 w-5`}
          sx={{
            color: index === asideBar.pointerIndex ? '#fff' : 'text.secondary',
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            color: index === asideBar.pointerIndex ? 'text.primary' : 'text.secondary',
            fontWeight: '500',
            marginLeft: '1.75rem',
            fontFamily: 'SmileySans',
          }}
        >
          {item.name}
        </Typography>
      </li>
    )
  })

  return (
    <motion.div className="w-[240px] relative" animate={{ width: asideBar.open ? 240 : 40 }}>
      <motion.div
        className="w-[240px] absolute top-0 left-0"
        animate={{ x: asideBar.open ? 0 : -200 }}
      >
        <Box
          className="w-full rounded-r-6 relative"
          sx={{
            backgroundColor: 'background.default',
            height: 'calc(100vh - 6rem);',
          }}
        >
          <Typography
            variant="h3"
            className="h-30 text-center"
            sx={{
              color: 'text.primary',
              fontSize: '30px',
              lineHeight: '120px',
              fontWeight: '700',
              fontFamily: 'SmileySans',
              letterSpacing: '0.1em',
            }}
          >
            {WEB_NAME}
          </Typography>
          <ul className="relative">
            <motion.li
              className="absolute top-0 left-0 h-12 w-[58px]"
              animate={{ y: asideBar.pointerIndex * 48 }}
            >
              <Box
                className="w-full h-full rounded-r-3"
                sx={{
                  backgroundColor: 'background.paper',
                }}
              />
            </motion.li>
            {AsideBar}
          </ul>
        </Box>
        <div
          className="absolute h-[100px] w-5 right-2 top-0 bottom-0 my-auto cursor-pointer"
          onClick={() => asideBar.toggleAsideBar()}
        >
          <Box
            className="absolute h-full w-[5px] top-0 left-0 right-0 mx-auto rounded-full transition duration-300"
            sx={{
              backgroundColor: 'warning.main',
              '&:hover': {
                backgroundColor: 'warning.dark',
              },
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
})
