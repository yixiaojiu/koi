import Hls from 'hls.js'
import { MutableRefObject, useEffect } from 'react'

type SourceType = 'hls' | 'mp4'

export const useVideoInit = (videoRef: MutableRefObject<HTMLVideoElement | null>, src?: string) => {
  const hls = new Hls()
  useEffect(() => {
    if (!src) {
      return
    }
    if (judgeSourceType(src) === 'mp4') {
      videoRef.current!.src = src
    } else {
      hls.loadSource(src)
      hls.attachMedia(videoRef.current!)
    }
    return () => {
      hls.destroy()
    }
  }, [src])
}

function judgeSourceType(src: string): SourceType {
  return src.endsWith('.mp4') ? 'mp4' : 'hls'
}
