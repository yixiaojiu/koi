import { MutableRefObject, MouseEventHandler, useState } from 'react'
import { useVideoControl } from '@/pages/anime/component/player/useVideoControl'
import { observer } from 'mobx-react-lite'
import { Progress } from '@/pages/anime/component/player/Progress'
import { IconButtonBase } from '@/components/button/IconButton'
import { playerStore } from '@/pages/anime/store/player.store'
import { textColorClassNames } from './constant'
import { iconMap } from './utils'

interface Props {
  className?: string
  videoRef: MutableRefObject<HTMLVideoElement | null>
  onClick?: MouseEventHandler
}

export const PlayerControler = observer((props: Props) => {
  const [player] = useState(() => playerStore)
  const { divideTime, durationTime } = useVideoControl(props.videoRef, player)
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
            icon={iconMap.playStateIcon(player.paused)}
            iconSize="large"
            className={`${textColorClassNames}`}
          />
          <IconButtonBase
            icon="i-ic-round-skip-next"
            iconSize="large"
            className={`${textColorClassNames} hover:animate-[icon-hover_0.8s_forwards]`}
          />
          <div className={`${textColorClassNames} select-none text-sm`}>
            <span>{divideTime}</span>
            <span className="mx-1">/</span>
            <span>{durationTime}</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <IconButtonBase
            icon={iconMap.volumeIcon(player.volume)}
            iconSize="normal"
            className={`${textColorClassNames}`}
          />
          <IconButtonBase
            icon="i-ic-round-picture-in-picture"
            iconSize="normal"
            className={`${textColorClassNames} hover:animate-[icon-hover_0.8s_forwards]`}
          />
          <IconButtonBase
            icon={iconMap.fullScreenIcon(player.isFullScreen)}
            iconSize="large"
            className={`${textColorClassNames} hover:animate-[icon-hover_0.8s_forwards]`}
          />
        </div>
      </div>
    </div>
  )
})
