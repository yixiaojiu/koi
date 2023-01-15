import { useContext, useEffect, useRef } from 'react'
import { useVideoInit } from '@/pages/anime/component/player/useVideo'
import pausedSvg from '@/assets/svg/paused.svg'
import { observer } from 'mobx-react-lite'
import { playerStore } from '@/pages/anime/store/player.store'
import { PlayerControler } from '@/pages/anime/component/player/PlayerControler'
import { stopPropagation } from '@/shared/utils/index'
import { MessageProvider, MessageContent } from '@/components/message/Message'
import { MessageContext } from '@/pages/anime/store/messageContext'
import { LoadingGirl } from '@/components/loading/LoadingGirl'
import { useMounted } from '@/shared/hook/useMounted'
import { LOADING_ID } from './constant'

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
  const { message, loadingMessage, addMessage } = useContext(MessageContext)
  useMounted(() => {
    addMessage!(<LoadingGirl />, LOADING_ID, true)
  })
  useEffect(() => {
    addMessage!(<MessageContent>{loadingMessage!}</MessageContent>)
  }, [loadingMessage])

  return (
    <div
      onClick={() => playerStore.togglePaused()}
      className={` aspect-video relative overflow-hidden ${props.className ? props.className : ''}`}
    >
      <video className="absolute-init" ref={videoRef} />
      <PausedIcon />
      <MessageProvider message={message!} className="absolute bottom-20 left-6" />
      <PlayerControler videoRef={videoRef} className="bottom-3" onClick={stopPropagation} />
    </div>
  )
}
