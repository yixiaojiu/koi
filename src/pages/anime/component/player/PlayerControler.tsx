import { MutableRefObject, MouseEventHandler, useState } from 'react'
import { useVideoControl } from '@/pages/anime/component/player/useVideoControl'
import { observer } from 'mobx-react-lite'
import { Progress } from '@/pages/anime/component/player/Progress'
import { IconButtonBase } from '@/components/button/IconButton'
import { playerStore } from '@/pages/anime/store/player.store'

interface Props {
  className?: string
  videoRef: MutableRefObject<HTMLVideoElement | null>
  onClick?: MouseEventHandler
}

const textColorClassNames = 'text-white/[0.7] hover:text-white'

export const PlayerControler = observer((props: Props) => {
  const [player] = useState(() => playerStore)
  useVideoControl(props.videoRef, player)
  return (
    <div
      onClick={props.onClick}
      className={`h-12 w-[97%] left-0 right-0 absolute mx-auto ${props.className ? props.className : ''}`}
    >
      <Progress />
      <div className="h-10 bg-[#4646464d] rounded-b-md px-4 flex justify-between">
        <div className="flex items-center gap-3">
          <IconButtonBase
            onClick={() => player.togglePaused()}
            icon="i-ic-round-play-arrow"
            iconSize="large"
            className={`${textColorClassNames}`}
          />
          <IconButtonBase icon="i-ic-round-skip-next" iconSize="large" className={`${textColorClassNames}`} />
          <div></div>
        </div>
      </div>
    </div>
  )
})
