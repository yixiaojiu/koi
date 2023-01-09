import { observer } from 'mobx-react-lite'
import { useLocation, useOutlet } from 'react-router-dom'
import { AppHeader } from '@/layout/AppHeader'
import { AppAsideBar } from '@/layout/AppAsideBar'
import { AppMainContainer } from '@/layout/AppMainContainer'
import { asideBarStore } from '@/store/asideBar.store'
import { useEffect, useState } from 'react'
import { handleTitle } from '@/shared/title'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { routes, CustomNonIndexRouteObject } from '@/router/index'
import { ScrollbarBox } from '@/components/box/ScrollbarBox'
import '@/router/guard/RouterTransition.less'

export const RouterGuard = observer(() => {
  const location = useLocation()

  // 导致 bug, 不使用useOutlet 导致路由过渡消失(自己简易封装Navigate组件解决)
  //  Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect,
  //  but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.%s
  const currentOutlet = useOutlet()
  debugger
  const { nodeRef } = (routes[0].children!.find((route) => route.path === location.pathname) ?? {
    nodeRef: null,
  }) as CustomNonIndexRouteObject

  const [asideBar] = useState(() => asideBarStore)

  useEffect(() => {
    asideBar.setPathname(location.pathname)
    handleTitle(location.pathname)
  }, [location.pathname])

  return (
    <>
      <AppHeader />
      <div className="flex-1 flex gap-8">
        <AppAsideBar />
        <AppMainContainer>
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              classNames={asideBar.changeDirection === 'up' ? 'flod-up' : 'flod-down'}
              timeout={300}
              unmountOnExit
              nodeRef={nodeRef && null}
            >
              <div
                className="transition duration-300 ease-in-out absolute h-full w-full top-0 left-0"
                ref={nodeRef && null}
              >
                <ScrollbarBox>{currentOutlet}</ScrollbarBox>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </AppMainContainer>
      </div>
    </>
  )
})
