import { observer } from 'mobx-react-lite'
import { useLocation, useOutlet } from 'react-router-dom'
import { AppHeader } from '@/layout/AppHeader'
import { AppAsideBar } from '@/layout/AppAsideBar'
import { AppMainContainer } from '@/layout/AppMainContainer'
import { asideBarStore, ChangeDirection } from '@/store/asideBar.store'
import { useEffect, useState, CSSProperties, createRef } from 'react'
import { handleTitle } from '@/shared/title'
import { SwitchTransition, Transition, TransitionStatus } from 'react-transition-group'
import { routes, CustomNonIndexRouteObject } from '@/router/index'

function getTransitonStyles(direction: ChangeDirection): Record<TransitionStatus, CSSProperties> {
  return {
    entering: {
      transform: 'translateY(0)',
    },
    entered: {
      transform: 'translateY(0)',
    },
    exiting: {
      transform: `${direction === 'up' ? 'translateY(100%)' : 'translateY(-100%)'}`,
    },
    exited: {
      transform: `${direction === 'up' ? 'translateY(-100%)' : 'translateY(100%)'}`,
    },
    unmounted: {},
  }
}

export const RouterGuard = observer(() => {
  const location = useLocation()
  const currentOutlet = useOutlet()
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
            <Transition key={location.pathname} timeout={150} unmountOnExit nodeRef={nodeRef && null}>
              {(state) => (
                <div
                  className="transition ease-in-out absolute h-full w-full top-0 left-0"
                  ref={nodeRef && null}
                  style={getTransitonStyles(asideBar.changeDirection)[state]}
                >
                  {currentOutlet}
                </div>
              )}
            </Transition>
          </SwitchTransition>
        </AppMainContainer>
      </div>
    </>
  )
})
