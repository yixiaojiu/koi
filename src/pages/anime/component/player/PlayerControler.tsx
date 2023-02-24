import { MutableRefObject, MouseEventHandler, useState } from 'react'
import { useVideoControl } from '@/pages/anime/component/player/useVideoControl'
import { observer } from 'mobx-react-lite'
import { IconButtonBase } from '@/components/button/IconButton'
import { playerStore } from '@/pages/anime/store/player.store'
import { togglePaused } from '@/pages/anime/component/player/utils'
import { textColorClassNames } from './constant'
import { iconMap } from './utils'

interface Props {
  className?: string
  videoRef: MutableRefObject<HTMLVideoElement | null>
  onClick?: MouseEventHandler
}

export const PlayerControler = observer((props: Props) => {
  const [player] = useState(() => playerStore)
  const { divideTimeFormat, durationTimeFormat, bufferedPercentage, playedPercentage } = useVideoControl(
    props.videoRef,
    player
  )

  return (
    <div
      onClick={props.onClick}
      className={`h-12 w-[97%] left-0 right-0 absolute mx-auto ${props.className ? props.className : ''}`}
    >
      <div className="w-full relative h-[6px]">
        {/* 进度条 */}
        <div className="h-[6px] w-full rounded-full overflow-hidden bg-black/30">
          {/* 播放进度 */}
          <div
            className="h-[6px] rounded-full absolute left-0 top-0 bg-gradient-to-l from-[#1aafe8] to-[#df6edc] transition-width ease-linear"
            style={{
              width: `${playedPercentage * 100}%`,
            }}
          />
          {/* 缓冲进度 */}
          <div
            className="w-full h-[6px] rounded-full absolute -left-full top-0 bg-white/40 transition-transform ease-linear"
            style={{
              transform: `translateX(${bufferedPercentage * 100}%)`,
            }}
          />
        </div>
      </div>

      <div className="h-10 bg-[#2b333fb3] rounded-b-md px-4 flex justify-between">
        <div className="flex items-center gap-3">
          <IconButtonBase
            onClick={() => togglePaused(player)}
            icon={iconMap.playStateIcon(player.paused)}
            iconSize="large"
            className={textColorClassNames}
          />
          <IconButtonBase
            icon="i-ic-round-skip-next"
            iconSize="large"
            className={`${textColorClassNames} hover:animate-[icon-hover_0.8s_forwards]`}
          />
          <div className={`${textColorClassNames} select-none text-sm`}>
            <span>{divideTimeFormat}</span>
            <span className="mx-1">/</span>
            <span>{durationTimeFormat}</span>
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
