import { CSSTransition } from 'react-transition-group'
import { useRef, useState } from 'react'
import '@/pages/home/component/home-banner/HomeBanner.less'
import { useBanner } from '@/pages/home/component/home-banner/useBanner'
import { ContainedRoundButton } from '@/components/button/ContainedRoundButton'
import { OutLinedRoundButton } from '@/components/button/OutLinedRoundButton'
import { TabLi } from '@/pages/home/component/home-banner/TabLi'
import { Slide } from '@/pages/home/component/home-banner/Slide'
import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import type { HomeData } from '@/service/types/getHome'

type Tab = 'hot' | 'recent'

export const HomeBanner = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const HomeData = queryClient.getQueryData<HomeData>(['home'])!
  const banners = HomeData.banners
  const hot = HomeData.hot
  const recent = HomeData.recent

  const { currentBanner, nextBanner, inProp, onEntered } = useBanner(6000, banners)
  const nodeRef = useRef(null)
  const [tab, setTab] = useState<Tab>('hot')

  return (
    <CSSTransition nodeRef={nodeRef} onEntered={onEntered} appear in={inProp} timeout={500} classNames="banner">
      <div ref={nodeRef} className="aspect-video relative overflow-hidden">
        <div className="home-banner-image flex h-full">
          <img className="min-w-full object-cover" src={currentBanner.cover} />
          <img className="min-w-full object-cover" src={nextBanner.cover} />
        </div>
        <div className="home-banner-info absolute flex items-center z-0 left-0 top-0 h-4/7 w-full p-10">
          <div className="home-banner-info-container">
            <h2 className="text-neutral-50 mb-4 text-8 font-bold">{currentBanner.title}</h2>
            <p className="text-gray-300 w-3/5 text-sm">
              在那笑容的前方可以看见未来。是光明地闪耀着的未来。尽管处于这种情况之下。那已经可以称之为奇迹了。
            </p>
            <div className="mt-8 flex gap-4">
              <ContainedRoundButton onClick={() => navigate(`/anime/${currentBanner.id}`)}>
                <span>前往播放</span>
                <div className="i-ic-round-play-arrow w-6 h-6"></div>
              </ContainedRoundButton>
              <OutLinedRoundButton>详情</OutLinedRoundButton>
            </div>
          </div>
        </div>
        <div className="home-banner-info-section absolute z-1 left-0 bottom-0 h-3/7 w-full bg-[rgba(0,0,0,.96)]">
          <div className="absolute w-full h-full z-2 px-10 pb-4">
            <div className="h-full flex flex-col">
              <ul className="flex gap-10 mb-4">
                <TabLi active={tab === 'hot'} onClick={() => setTab('hot')}>
                  热门
                </TabLi>
                <TabLi active={tab === 'recent'} onClick={() => setTab('recent')}>
                  最近更新
                </TabLi>
              </ul>
              <div className="flex-1 overflow-x-hidden">
                <div
                  className={` h-full w-[200%] flex transition-transform duration-500 ${
                    tab === 'recent' ? '-translate-x-1/2' : 'translate-x-0'
                  } `}
                >
                  <Slide animes={hot} />
                  <Slide animes={recent} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}
