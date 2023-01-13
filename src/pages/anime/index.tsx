import { IconButton } from '@/components/button/IconButton'
import { useNavigate } from 'react-router-dom'
import { Player } from '@/pages/anime/component/player/Player'
import { ComicTab } from '@/pages/anime/component/comic-tab/ComicTab'
import { useParams } from 'react-router-dom'
import { PageLoading } from '@/components/loading/PageLoading'
import { useRequest } from '@/pages/anime/hooks'

export default () => {
  const navigate = useNavigate()
  const params = useParams<{ id: string }>()
  const { AnimeIsLoading, animeInfo, videoInfo, videoIsLoading } = useRequest(params.id!)

  return (
    <div className="min-h-full bg-[var(--box-bg-color)] relative px-8 py-4">
      <IconButton
        className="sticky z-5 top-6 left-6 bg-[var(--primary-color)] rounded-full transition hover:scale-80 shadow-xl"
        icon="i-ic-round-arrow-back-ios"
        onClick={() => {
          navigate(-1)
        }}
      />
      <div className="mt-6 relative rounded-3xl overflow-hidden aspect-video bg-black">
        {AnimeIsLoading || videoIsLoading ? <PageLoading /> : null}
        <Player src={videoInfo?.videoUrl} />
      </div>
      <div className="mt-10 rounded-3xl bg-[var(--bg-color)]">
        <ComicTab />
      </div>
    </div>
  )
}
