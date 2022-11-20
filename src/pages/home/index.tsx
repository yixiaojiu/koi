import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [x, setX] = useState(0)
  return (
    <div className='p-10'>
      <motion.div className='h-[100px] w-[100px] border border-red rounded-2' animate={{ x }}/>
      <button onClick={() => setX(x + 100)}>移动</button>
    </div>
  )
}
