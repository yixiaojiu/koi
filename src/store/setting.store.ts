import { makeAutoObservable } from 'mobx'
import type { ThemeMode } from '@/shared/types/theme'
import { makePersistable } from 'mobx-persist-store'
import { createTheme, getThemeColorInstance } from '@/theme/color/color.class'

const htmlDom = document.querySelector('html')!
const initMode = (mode: ThemeMode) => {
  htmlDom.className = mode
}
class SettingsStore {
  // 主题模式
  mode: ThemeMode = 'light'
  // 爬虫地址
  serveUrl = ''
  // 是否使用mock 数据
  isMock = true

  constructor() {
    makeAutoObservable(this)

    makePersistable(this, {
      name: '__SETTINGS__',
      properties: ['mode', 'serveUrl', 'isMock'],
      storage: window.localStorage,
    }).then(() => {
      initMode(this.mode)
      createTheme(this.mode)
    })
  }

  toggleMode() {
    if (this.mode === 'light') {
      this.mode = 'dark'
    } else {
      this.mode = 'light'
    }
    initMode(this.mode)
    getThemeColorInstance()!.changeMode(this.mode)
  }

  changeServeUrl(url: string) {
    this.serveUrl = url
  }

  get isDark() {
    return this.mode === 'dark'
  }
}

export const settingsStore = new SettingsStore()
