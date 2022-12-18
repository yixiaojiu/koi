import { useQueryClient } from '@tanstack/react-query'
import type { IndexData } from '@/service/types/getIndex'
import { useEffect, useState } from 'react'

export const useBanner = (timer: number) => {
  const queryClient = useQueryClient()
  const banners = queryClient.getQueryData<IndexData>(['getIndex'])!.banners
  const [bannerItem, setBannerItem] = useState(banners[0])
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerItem((bannerItem) => {
        const index = banners.findIndex(item => item.id === bannerItem.id)
        if (index === banners.length - 1) {
          return banners[0]
        } else {
          return banners[index + 1]
        }
      })
    }, timer)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return bannerItem
}
