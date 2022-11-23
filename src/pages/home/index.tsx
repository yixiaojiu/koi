import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [x, setX] = useState(0)
  const [open, setOpen] = useState(true)
  return (
    <div className='p-10'>
      <motion.div className='h-[300px] w-[300px] relative border border-red rounded-2 overflow-hidden' animate={{ width: open ? 300 : 100 }}>
        <motion.div className='h-[300px] w-[200px] absolute top-0 left-0 bg-amber' animate={{ x: open ? 0 : -200 }}></motion.div>
      </motion.div>
      <button onClick={() => setOpen(!open)}>按钮</button>
      <Box className='w-10 h-10' sx={{
        backgroundColor: 'primary.dark',
      }}></Box>
    </div>
  )
}
