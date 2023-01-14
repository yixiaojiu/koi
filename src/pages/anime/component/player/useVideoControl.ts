import { MutableRefObject, useEffect, useState } from 'react'
import { PlayerStore } from '@/pages/anime/store/player.store'

export const useVideoControl = (videoRef: MutableRefObject<HTMLVideoElement | null>, player: PlayerStore) => {
  const [divideTime, setDivideTime] = useState('00:00')
  const [durationTime, setDurationTime] = useState('00:00')
  useEffect(() => {
    if (player.paused) {
      videoRef.current!.pause()
    } else {
      videoRef.current!.play()
    }
  }, [player.paused])
  return {
    divideTime,
    durationTime,
  }
}
