import { Box, Button } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { getIndex } from '@/service/api/anime'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const Content = observer(() => {
  const [num, setNum] = useState(0)
  const { isLoading, data } = useQuery({
    queryKey: ['getIndex'],
    queryFn: async () => {
      const { data } = await getIndex()
      console.log(data)
      return data.data
    },
  })
  return (<>
    <div>
      {
        isLoading ? 'true' : 'false'
      }
    </div>
    <div>{num}</div>
    <Button variant='contained' onClick={() => setNum(num + 1)}>+1</Button>
    </>
  )
})

export default function Home() {
  return (
     <Content />
  )
}
