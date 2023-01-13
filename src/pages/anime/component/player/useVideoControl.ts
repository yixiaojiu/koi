import { MutableRefObject, useEffect } from 'react'
import { PlayerStore } from '@/pages/anime/store/player.store'

export const useVideoControl = (videoRef: MutableRefObject<HTMLVideoElement | null>, player: PlayerStore) => {
  useEffect(() => {
    if (player.paused) {
      videoRef.current!.pause()
    } else {
      videoRef.current!.play()
    }
  }, [player.paused])
}
