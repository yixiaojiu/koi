import { useRef } from 'react'
import { useVideoInit } from '@/pages/anime/component/player/useVideo'
import pausedSvg from '@/assets/svg/paused.svg'
import { observer } from 'mobx-react-lite'
import { playerStore } from '@/pages/anime/store/player.store'
import { PlayerControler } from '@/pages/anime/component/player/PlayerControler'
import { stopPropagation } from '@/shared/utils/index'

interface Props {
  src: string | undefined
  className?: string
}

const PausedIcon = observer(() =>
  playerStore.paused ? <img src={pausedSvg} width="60" height="60" className="absolute right-10 bottom-18" /> : null
)

export const Player = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  useVideoInit(videoRef, props.src)
  return (
    <div
      onClick={() => playerStore.togglePaused()}
      className={` aspect-video relative overflow-hidden ${props.className ? props.className : ''}`}
    >
      <video className="absolute-init" ref={videoRef} />
      <PausedIcon />
      <PlayerControler videoRef={videoRef} className="bottom-3" onClick={stopPropagation} />
    </div>
  )
}
