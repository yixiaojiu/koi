import { IconButton } from '@/components/button/IconButton'
import { useNavigate } from 'react-router-dom'
import { Player } from '@/pages/anime/component/player/Player'
import { ComicTab } from '@/pages/anime/component/comic-tab/ComicTab'
import { useParams } from 'react-router-dom'
import { useRequest } from '@/pages/anime/hooks'
import { MessageContext } from './store/messageContext'
import { useMessage } from '@/components/message/Message'

export default () => {
  const navigate = useNavigate()
  const params = useParams<{ id: string }>()
  const { animeInfo, videoInfo, loadingMessage } = useRequest(params.id!)
  const { messages, addMessage, removeMessage, clearMessages } = useMessage(3000)

  return (
    <div className="min-h-full bg-[var(--box-bg-color)] relative px-8 py-4">
      <IconButton
        className="sticky z-5 top-6 left-6 bg-[var(--primary-color)] rounded-full transition hover:scale-80 shadow-xl"
        icon="i-ic-round-arrow-back-ios"
        onClick={() => {
          navigate(-1)
        }}
      />
      <div className="mt-6 rounded-3xl overflow-hidden aspect-video bg-black">
        <MessageContext.Provider value={{ loadingMessage, messages, addMessage, removeMessage, clearMessages }}>
          <Player src={videoInfo?.videoUrl} />
        </MessageContext.Provider>
      </div>
      <div className="mt-10 rounded-3xl bg-[var(--bg-color)]">
        <ComicTab />
      </div>
    </div>
  )
}
