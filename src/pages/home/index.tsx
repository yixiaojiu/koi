import { Box, Button } from '@mui/material'
import { observer } from 'mobx-react-lite'

const Content = observer(() => {
  return (<>
    <div className='font-anek text-2xl'>发生科技发达风纪扣打算减肥</div>
    <div className='font-anek text-lg font-normal '>发生科技发达风纪扣打算减肥</div>
    <div className='text-2xl font-normal'>发生科技发达风纪扣打算减肥</div>
    </>
  )
})

export default function Home() {
  return (
     <Content />
  )
}
