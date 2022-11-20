import { makeAutoObservable } from 'mobx'
import { asideBarItems } from '@/layout/constant'

class AsideBarStore {
  open = true
  pathname = '/home'

  constructor() {
    makeAutoObservable(this)
  }

  toggleAsideBar() {
    this.open = !this.open
  }

  setPathname(path: string) {
    this.pathname = path
  }

  get pointerIndex() {
    return asideBarItems.findIndex(item => item.path === this.pathname)
  }
}

export const asideBarStore = new AsideBarStore()
