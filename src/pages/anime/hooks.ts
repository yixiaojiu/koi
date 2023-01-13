import { useEffect, useMemo } from 'react'
import { AnimeVideoItem } from '@/service/types/getAnime'
import { setTitle } from '@/shared/utils/title'
import { useUpdate } from '@/shared/hook/useUpdate'
import { useQuery } from '@tanstack/react-query'
import { getAnime, getVideo } from '@/service/api/anime'

export const useVideoItem = (playLists: AnimeVideoItem[][] | undefined) => {
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
  const { data: animeInfo, isLoading: AnimeIsLoading } = useQuery(['anime', id], async ({ queryKey }) => {
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
    AnimeIsLoading,
    videoIsLoading,
  }
}
