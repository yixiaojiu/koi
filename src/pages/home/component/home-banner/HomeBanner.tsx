import { CSSTransition } from 'react-transition-group'
import type { ReactNode } from 'react'
import { useRef, useState } from 'react'

import '@/pages/home/component/home-banner/HomeBanner.less'
import { useBanner } from '@/pages/home/component/home-banner/useBanner'
import { ContainedRoundButton } from '@/components/button/ContainedRoundButton'
import { OutLinedRoundButton } from '@/components/button/OutLinedRoundButton'
import { Box } from '@mui/material'

type Tab = 'hot' | 'recent'

const TabLi = (props: { children: ReactNode; active: boolean; onClick: () => void }) => (
  <Box
    component="li"
    className="cursor-pointer font-bold py-2"
    sx={{
      color: props.active ? 'background.paper' : 'rgb(209 213 219)',
      borderBottom: props.active ? '2px solid' : '',
      borderBottomColor: 'background.paper',
    }}
    onClick={props.onClick}
  >
    {props.children}
  </Box>
)

export const HomeBanner = () => {
  const { currentBanner, nextBanner, inProp, onEntered } = useBanner(6000)
  const nodeRef = useRef(null)
  const [tab, setTab] = useState<Tab>('hot')

  return (
    <CSSTransition
      nodeRef={nodeRef}
      onEntered={onEntered}
      appear
      in={inProp}
      timeout={500}
      classNames="banner"
    >
      <div ref={nodeRef} className="aspect-video relative overflow-hidden">
        <div className="home-banner-image flex h-full">
          <img className="min-w-full object-cover" src={currentBanner.cover} />
          <img className="min-w-full object-cover" src={nextBanner.cover} />
        </div>
        <div className="home-banner-info absolute flex items-center z-0 left-0 top-0 h-3/5 w-full p-10">
          <div className="home-banner-info-container">
            <h2 className="text-neutral-50 mb-4 text-8">{currentBanner.title}</h2>
            <p className="text-gray-300 w-3/5 text-sm">
              在那笑容的前方可以看见未来。是光明地闪耀着的未来。尽管处于这种情况之下。那已经可以称之为奇迹了。
            </p>
            <div className="mt-8 flex gap-4">
              <ContainedRoundButton>
                <span>前往播放</span>
                <div className="i-ic-round-play-arrow w-6 h-6"></div>
              </ContainedRoundButton>
              <OutLinedRoundButton>详情</OutLinedRoundButton>
            </div>
          </div>
        </div>
        <div className="home-banner-info-section absolute z-1 left-0 bottom-0 h-2/5 w-full bg-[rgba(0,0,0,.96)]">
          <div className='absolute w-full h-full z-2 px-10 pb-4'>
            <div className="h-full flex flex-col">
              <ul className="flex gap-10">
                <TabLi active={tab === 'hot'} onClick={() => setTab('hot')}>热门</TabLi>
                <TabLi active={tab === 'recent'} onClick={() => setTab('recent')}>最近更新</TabLi>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}
