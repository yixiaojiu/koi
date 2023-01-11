import { useMemo } from 'react'
import { AnimeVideoItem } from '@/service/types/getAnime'

export const useVideoItem = (playLists: AnimeVideoItem[][] | undefined) => {
  return useMemo(() => {
    if (!playLists) {
      return
    }
    // 默认返回
    return playLists[0][0]
  }, [playLists])
}
