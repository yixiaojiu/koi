import { HomeData } from '@/service/types/getHome'
import { useQueryClient } from '@tanstack/react-query'

export const HomeArticle = () => {
  const queryClient = useQueryClient()
  const indexData = queryClient.getQueryData<HomeData>(['home'])!
  return <div></div>
}
