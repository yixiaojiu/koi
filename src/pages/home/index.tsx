import { Box, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { getIndex } from '@/service/api/anime'
import { observer } from 'mobx-react-lite'
import { settingsStore } from '@/store/setting.store'

const View = observer(() => {
  const [settings] = useState(() => settingsStore)
  const handleClick = async () => {
    const { data } = await getIndex()
    console.log(data)
  }
  return (<>
    <Button onClick={() => settings.changeServeUrl('https://koi-api.vercel.app')} className='m-4'>更改地址</Button>
    <Button onClick={handleClick}>发送请求</Button>
    <p>{settings.serveUrl}</p>
    </>
  )
})

export default function Home() {
  const [open, setOpen] = useState(true)
  return (
      <div className='p-10'>
        <motion.div className='h-[300px] w-[300px] relative border border-red rounded-2 overflow-hidden' animate={{ width: open ? 300 : 100 }}>
          <motion.div className='h-[300px] w-[200px] absolute top-0 left-0 bg-amber' animate={{ x: open ? 0 : -200 }}></motion.div>
        </motion.div>
        <button onClick={() => setOpen(!open)}>按钮</button>
        <View />
        <Box className='w-10 h-10' sx={{
          backgroundColor: 'primary.dark',
        }}></Box>
      </div>
  )
}
