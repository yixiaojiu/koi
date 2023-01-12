import { useRef } from 'react'
import { useVideo } from '@/pages/anime/component/player/useVideo'
import pausedSvg from '@/assets/svg/paused.svg'
import { observer } from 'mobx-react-lite'
import { playerStore } from '@/pages/anime/store/player.store'

interface Props {
  src: string | undefined
  className?: string
}

const PausedIcon = observer(() =>
  playerStore.paused ? <img src={pausedSvg} width="60" height="60" className="absolute right-10 bottom-15" /> : null
)

export const Player = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  useVideo(videoRef, props.src)
  return (
    <div className={` aspect-video relative ${props.className ? props.className : ''}`}>
      <video className="absolute-init" ref={videoRef} />
      <PausedIcon />
    </div>
  )
}
