import { useEffect, useMemo } from 'react'
import { AnimeVideoItem } from '@/service/types/getAnime'
import { setTitle } from '@/shared/utils/title'
import { useQuery } from '@tanstack/react-query'
import { getAnime, getVideo } from '@/service/api/anime'

export const useVideoItem = (playLists?: AnimeVideoItem[][]) => {
  return useMemo(() => {
    if (!playLists) {
      return
    }
    // 默认返回
    return playLists[0][0]
  }, [playLists])
}

export const useDocumentTitle = (title: string | undefined) => {
  useEffect(() => {
    setTitle({ title })
  }, [title])
}

export const useRequest = (id: string) => {
  const { data: animeInfo, isLoading: animeIsLoading } = useQuery(['anime', id], async ({ queryKey }) => {
    const { data: res } = await getAnime(queryKey[1]!)
    return res.data
  })
  const animeVideoItem = useVideoItem(animeInfo?.playLists)
  useDocumentTitle(animeInfo?.title)

  const { data: videoInfo, isLoading: videoIsLoading } = useQuery(
    ['video', animeVideoItem],
    async ({ queryKey }) => {
      const { data: res } = await getVideo((queryKey[1] as AnimeVideoItem).path)
      return res.data
    },
    {
      enabled: !!animeVideoItem,
      staleTime: Infinity,
    }
  )
  return {
    animeInfo,
    videoInfo,
    loadingMessage: animeIsLoading || videoIsLoading ? '正在拼命请求视频🍔' : '已获得视频地址🥗',
  }
}
