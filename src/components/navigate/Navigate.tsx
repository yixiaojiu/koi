import { useNavigate } from 'react-router-dom'
import { useMounted } from '@/shared/hook/useMounted'

export const Navigate = (props: { to: string }) => {
  const navigate = useNavigate()
  useMounted(() => {
    navigate(props.to)
  })
  return null
}
