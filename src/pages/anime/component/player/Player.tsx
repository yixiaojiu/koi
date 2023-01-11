import { useRef } from 'react'
import { useVideo } from '@/pages/anime/component/player/useVideo'

interface Props {
  src: string | undefined
  className?: string
}

export const Player = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  useVideo(videoRef, props.src)
  return (
    <div className={` aspect-video relative ${props.className ? props.className : ''}`}>
      <video className="absolute-init" ref={videoRef} controls />
    </div>
  )
}
