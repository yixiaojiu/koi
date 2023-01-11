import { IconButton } from '@/components/button/IconButton'
import { useNavigate } from 'react-router-dom'
import { Player } from '@/pages/anime/component/player/Player'
import { ComicTab } from '@/pages/anime/component/comic-tab/ComicTab'
import { getVideo, getAnime } from '@/service/api/anime'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { useVideoItem } from '@/pages/anime/component/player/useVideoItem'
import { useUpdate } from '@/shared/hook/useUpdate'
import type { AnimeVideoItem } from '@/service/types/getAnime'

export default () => {
  const navigate = useNavigate()
  const params = useParams<{ id: string }>()
  const update = useUpdate()
  const { data: animeInfo, isLoading: AnimeIsLoading } = useQuery(['anime', params.id], async ({ queryKey }) => {
    const { data: res } = await getAnime(queryKey[1]!)
    return res.data
  })
  const animeVideoItem = useVideoItem(animeInfo?.playLists)

  const { data: videoInfo, isLoading: videoIsLoading } = useQuery(
    ['video', animeVideoItem],
    async ({ queryKey }) => {
      const { data: res } = await getVideo((queryKey[1] as AnimeVideoItem).path)
      // 解决请求完成，不更新问题
      update()
      return res.data
    },
    {
      enabled: !!animeVideoItem,
      staleTime: Infinity,
    }
  )
  return (
    <div className="min-h-full bg-[var(--box-bg-color)] relative px-8 py-4">
      <IconButton
        className="sticky z-5 top-6 left-6 bg-[var(--primary-color)] rounded-full transition hover:scale-80 shadow-xl"
        icon="i-ic-round-arrow-back-ios"
        onClick={() => {
          navigate(-1)
        }}
      />
      <div className="mt-6 rounded-3xl bg-black">
        <Player loading={AnimeIsLoading || videoIsLoading} />
      </div>
      <div className="mt-10 rounded-3xl bg-[var(--bg-color)]">
        <ComicTab />
      </div>
    </div>
  )
}
