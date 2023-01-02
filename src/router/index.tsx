import type { LazyExoticComponent } from 'react'
import { Suspense, lazy } from 'react'
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom'
import { RouterGuard } from '@/router/guard/routerGuard'

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

export const router = createHashRouter([
  {
    path: '/',
    element: <RouterGuard />,
    children: [
      { element: <Navigate to={'home'} />, index: true },
      { path: 'home', element: <Home /> },
      { path: 'search', element: <Search /> },
      { path: 'user', element: <User /> },
      { path: 'pixiv', element: <Pixiv /> },
      { path: 'setting', element: <Setting /> },
      { path: '*', element: <NotFounded /> },
    ],
  },
])

export const Router = () => <RouterProvider router={router} />
