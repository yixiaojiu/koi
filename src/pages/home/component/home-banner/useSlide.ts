import type { RefObject } from 'react'
import { useMemo, useState } from 'react'
import { useMounted } from '@/shared/utils'

const GAP_WIDTH = 16

export const useSlide = (nodeRef: RefObject<HTMLImageElement>, slideLength: number) => {
  const [slideWidth, setSlideWidth] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useMounted(() => {
    nodeRef.current!.onload = () => {
      setSlideWidth(nodeRef.current!.offsetWidth)
    }
  })

  const translateX = useMemo(() => -(activeIndex * (slideWidth + GAP_WIDTH)), [slideWidth, activeIndex])

  const back = () => {
    setActiveIndex((activeIndex) => (activeIndex === 0 ? 0 : activeIndex - 1))
  }

  const forward = () => {
    setActiveIndex((activeIndex) => (activeIndex === slideLength - 1 ? activeIndex : activeIndex + 1))
  }

  const canForward = () => activeIndex !== slideLength - 1

  const canBack = () => activeIndex !== 0

  return {
    translateX,
    activeIndex,
    back,
    forward,
    canForward,
    canBack,
  }
}
