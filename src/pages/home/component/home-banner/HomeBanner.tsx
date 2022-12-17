import { useQueryClient } from '@tanstack/react-query'
import type { IndexData } from '@/service/types/getIndex'

export const HomeBanner = () => {
  const queryClient = useQueryClient()
  const banners = queryClient.getQueryData<IndexData>(['getIndex'])!.banners
  return (
    <div>

    </div>
  )
}
