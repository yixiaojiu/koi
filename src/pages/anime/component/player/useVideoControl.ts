import { MutableRefObject, useEffect, useState, useCallback, useContext } from 'react'
import { PlayerStore } from '@/pages/anime/store/player.store'
import { thorttle } from '@/shared/utils'
import { MessageContext } from '@/pages/anime/store/messageContext'
import { LOADING_ID } from './constant'

export const useVideoControl = (videoRef: MutableRefObject<HTMLVideoElement | null>, player: PlayerStore) => {
  const [divideTime, setDivideTime] = useState('00:00')
  const [durationTime, setDurationTime] = useState('00:00')
  const [isError, setIsError] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  const { addMessage, clearMessages, removeMessage } = useContext(MessageContext)

  useEffect(() => {
    if (player.paused) {
      videoRef.current!.pause()
    } else {
      videoRef.current!.play()
    }
  }, [player.paused])

  const createEventHandler = useCallback(() => {
    const timeupdate = thorttle(() => {
      setDivideTime((divideTime) => handleTime(videoRef.current!.currentTime, hasHours(divideTime)))
    }, 600)

    const error = (e: ErrorEvent) => {
      setIsError(true)
      removeMessage!(LOADING_ID)
      addMessage!('视频加载出错😥')
      console.log(e)
    }

    const waiting = () => {
      setIsWaiting(true)
    }

    const playing = () => {
      setIsWaiting(false)
    }

    const canplay = () => {
      clearMessages!()
      const durationTimeStr = handleTime(videoRef.current!.duration)
      setDurationTime(durationTimeStr)
      setDivideTime(handleTime(0, hasHours(durationTime)))
    }

    return {
      timeupdate,
      error,
      waiting,
      playing,
      canplay,
    }
  }, [])

  const { timeupdate, error, waiting, playing, canplay } = createEventHandler()

  useEffect(() => {
    if (!videoRef.current) {
      return
    }
    const videoEl = videoRef.current
    // currentTime更新触发
    videoEl.addEventListener('timeupdate', timeupdate)
    // 错误
    videoEl.addEventListener('error', error)
    // 由于暂时缺少数据，播放已停止
    videoEl.addEventListener('waiting', waiting)
    // 由于缺乏数据而暂停或延迟后，播放准备开始
    videoEl.addEventListener('playing', playing)
    // 媒体可播放
    videoEl.addEventListener('canplay', canplay)

    return () => {
      videoEl.removeEventListener('timeupdate', timeupdate)
      videoEl.removeEventListener('error', error)
      videoEl.removeEventListener('waiting', waiting)
      videoEl.removeEventListener('playing', playing)
      videoEl.removeEventListener('canplay', canplay)
    }
  }, [videoRef])

  return {
    divideTime,
    durationTime,
    isError,
    isWaiting,
  }
}

function handleTime(totalSeconds: number, hasHours?: boolean) {
  const roundTime = Math.round(totalSeconds)
  const seconds = roundTime % 60
  const minutes = Math.floor(roundTime / 60) % 60
  const hours = Math.floor(roundTime / 3600)
  return `${hasHours || hours ? `${hours}:` : ''}${isNeedZero(minutes)}:${isNeedZero(seconds)}`
}

function hasHours(timeStr: string) {
  return timeStr.split(':').length === 3
}

function isNeedZero(number: number) {
  return number < 10 ? '0' + number : number
}
