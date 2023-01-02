import type { LazyExoticComponent } from 'react'
import { Suspense, lazy, createRef, RefObject } from 'react'
import { Navigate, RouterProvider, createHashRouter, IndexRouteObject, NonIndexRouteObject } from 'react-router-dom'
import { RouterGuard } from '@/router/guard/routerGuard'
import { Override } from '@/shared/types/utils'

export type CustomNonIndexRouteObject = Override<
  NonIndexRouteObject,
  { children?: CustomRouteObject[]; nodeRef?: RefObject<Element> }
>

type CustomRouteObject = IndexRouteObject | CustomNonIndexRouteObject

const Loadable = (Component: LazyExoticComponent<any>) => (props: Record<string, any>) => {
  return (
    <Suspense fallback={<div />}>
      <Component {...props} />
    </Suspense>
  )
}

const Home = Loadable(lazy(() => import('@/pages/home/index')))
const Search = Loadable(lazy(() => import('@/pages/search/index')))
const User = Loadable(lazy(() => import('@/pages/user/index')))
const Pixiv = Loadable(lazy(() => import('@/pages/pixiv/index')))
const Setting = Loadable(lazy(() => import('@/pages/setting/index')))
const NotFounded = Loadable(lazy(() => import('@/pages/404/index')))

export const routes: CustomRouteObject[] = [
  {
    path: '/',
    element: <RouterGuard />,
    children: [
      { element: <Navigate to={'home'} />, index: true },
      { path: 'home', element: <Home />, nodeRef: createRef() },
      { path: 'search', element: <Search />, nodeRef: createRef() },
      { path: 'user', element: <User />, nodeRef: createRef() },
      { path: 'pixiv', element: <Pixiv />, nodeRef: createRef() },
      { path: 'setting', element: <Setting />, nodeRef: createRef() },
      { path: '*', element: <NotFounded /> },
    ],
  },
]

export const router = createHashRouter(routes)

export const Router = () => <RouterProvider router={router} />
