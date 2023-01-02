import { makeAutoObservable } from 'mobx'
import { asideBarItems } from '@/layout/constant'

export type ChangeDirection = 'up' | 'down'

function findAsideBarIndex(path: string) {
  return asideBarItems.findIndex((item) => item.path === path)
}

class AsideBarStore {
  open = true
  pathname = '/home'
  changeDirection: ChangeDirection = 'up'

  constructor() {
    makeAutoObservable(this)
  }

  toggleAsideBar() {
    this.open = !this.open
  }

  setPathname(path: string) {
    // 配合react router 做路由跳转过度
    if (findAsideBarIndex(this.pathname) > findAsideBarIndex(path)) {
      this.changeDirection = 'up'
    } else {
      this.changeDirection = 'down'
    }
    this.pathname = path
  }

  get pointerIndex() {
    return asideBarItems.findIndex((item) => item.path === this.pathname)
  }
}

export const asideBarStore = new AsideBarStore()
