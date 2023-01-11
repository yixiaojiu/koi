import Hls from 'hls.js'
import { MutableRefObject, useEffect } from 'react'

type SourceType = 'hls' | 'mp4'

export const useVideo = (videoRef: MutableRefObject<HTMLVideoElement | null>, src: string | undefined) => {
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
  }, [src])
}
// "videoUrl": "https://wolongzywcdn3.com:65/dMYz2m3V/index.m3u8"

function judgeSourceType(src: string): SourceType {
  return src.endsWith('.mp4') ? 'mp4' : 'hls'
}
