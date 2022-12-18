import { CSSTransition } from 'react-transition-group'
import { useRef, useState } from 'react'
import './HomeBanner.less'
import { useBanner } from '@/pages/home/component/home-banner/useBanner'
import { ObjectState } from '@/pages/home/ObjectState'

function ImageTransition() {
  const [inProp, setInProp] = useState(true)
  const nodeRef = useRef(null)
  return (
    <>
      <CSSTransition nodeRef={nodeRef} appear in={inProp} timeout={1000} classNames="banner">
        <div ref={nodeRef} className='w-25 h-25 bg-amber'></div>
      </CSSTransition>
    </>
  )
}

export const HomeBanner = () => {
  const bannerItem = useBanner(6000)
  return (
    <div>
      {/* <ImageTransition /> */}
      <div>{bannerItem.title}</div>
    </div>
  )
}
