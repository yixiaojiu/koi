import { MutableRefObject } from 'react'
import { useMounted } from '@/shared/hook/useMounted'

export const useMove = (ref: MutableRefObject<HTMLDivElement | null>) => {
  useMounted(() => {
    if (!ref.current) {
      return
    }
    ref.current.ondragstart = function () {
      return false
    }
    const element = ref.current
    const width = element.offsetWidth
    const height = element.offsetHeight

    // 拖拽起始点
    let startX = 0
    let startY = 0
    // 元素定位的left与bottom
    let left = 0
    let bottom = 0
    // 移动过程中的偏移值
    let offsetX = 0
    let offsetY = 0
    // 移动过程中元素的left与bottom
    let moveLeft = 0
    let moveBottom = 0

    function mouseDown(ev: MouseEvent) {
      const rect = element.getBoundingClientRect()
      startX = ev.screenX
      startY = ev.screenY
      left = rect.left
      bottom = document.documentElement.clientHeight - rect.bottom
      ref.current?.addEventListener('mousemove', mouseMove)
      ref.current?.addEventListener('mouseup', mouseUp)
    }

    function mouseMove(ev: MouseEvent) {
      offsetX = ev.screenX - startX
      offsetY = ev.screenY - startY
      if (left + offsetX + width > document.documentElement.clientWidth) {
        moveLeft = document.documentElement.clientWidth - width
      } else if (left + offsetX < 0) {
        moveLeft = 0
      } else {
        moveLeft = left + offsetX
      }

      if (bottom - offsetY + height > document.documentElement.clientHeight) {
        moveBottom = document.documentElement.clientHeight - height
      } else if (bottom - offsetY < 0) {
        moveBottom = 0
      } else {
        moveBottom = bottom - offsetY
      }

      element.style.left = moveLeft + 'px'
      element.style.bottom = moveBottom + 'px'
    }

    function mouseUp() {
      ref.current?.removeEventListener('mousemove', mouseMove)
      ref.current?.removeEventListener('mouseup', mouseUp)
    }

    ref.current.addEventListener('mousedown', mouseDown)

    return () => {
      ref.current?.removeEventListener('mousedown', mouseDown)
    }
  })
}
