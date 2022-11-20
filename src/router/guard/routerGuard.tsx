import { observer } from 'mobx-react-lite'
import { Outlet, useLocation } from 'react-router-dom'
import { AppHeader } from '@/layout/AppHeader'
import { AppAsideBar } from '@/layout/AppAsideBar'
import { AppMainContainer } from '@/layout/AppMainContainer'
import { asideBarStore } from '@/store/asideBar.store'
import { useEffect, useState } from 'react'

export const RouterGuard = observer(() => {
  const location = useLocation()
  const [asideBar] = useState(() => asideBarStore)
  useEffect(() => {
    asideBar.setPathname(location.pathname)
  }, [location.pathname])
  return (
    <>
      <AppHeader />
      <div className="flex-1 flex gap-8">
        <AppAsideBar />
        <AppMainContainer>
          <Outlet />
        </AppMainContainer>
      </div>
    </>
  )
})
