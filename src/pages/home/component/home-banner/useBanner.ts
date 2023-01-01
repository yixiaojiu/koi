import type { Banner } from '@/service/types/getHome'
import { useEffect, useRef, useState } from 'react'

export const useBanner = (timer: number, banners: Banner[]) => {
  const isFirstRender = useRef(true)
  const [inProp, setInProp] = useState(true)
  const [bannerIndex, setBannerIndex] = useState(0)
  const onEntered = () => {
    setInProp(false)
    if (!isFirstRender.current) {
      setBannerIndex((bannerIndex) => {
        if (bannerIndex === banners.length - 1) {
          return 0
        } else {
          return bannerIndex + 1
        }
      })
    } else {
      isFirstRender.current = false
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setInProp(true)
    }, timer)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return {
    currentBanner: banners[bannerIndex],
    nextBanner: bannerIndex === banners.length - 1 ? banners[0] : banners[bannerIndex + 1],
    inProp,
    onEntered,
  }
}
