import { motion } from 'framer-motion'
import { useState } from 'react'

// Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.%s
export default function User() {
  const [visible, setVisible] = useState(true)

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  return (
    <div className="h-full text-amber center flex-col">
      <div className="text-[var(--font-color)]">ooooooooo</div>
      <motion.div
        animate={{
          x: visible ? 200 : 0,
          transition: {
            type: 'spring',
          },
        }}
      >
        aaaaaaaaaaa
      </motion.div>
      <button onClick={() => setVisible((visible) => !visible)}>按钮</button>
      <motion.ul initial="hidden" animate={visible ? 'visible' : 'hidden'} variants={item}>
        <motion.li>1</motion.li>
        <motion.li>2</motion.li>
        <motion.li>3</motion.li>
      </motion.ul>
    </div>
  )
}
