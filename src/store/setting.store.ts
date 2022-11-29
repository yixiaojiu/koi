import { makeAutoObservable } from 'mobx'
import type { ThemeMode } from '@/shared/types/theme/theme'
import { makePersistable } from 'mobx-persist-store'

const htmlDom = document.querySelector('html')!
const initMode = (mode: ThemeMode) => {
  htmlDom.className = mode
}
class SettingsStore {
  mode: ThemeMode = 'light'
  serveUrl = ''
  isMock = true

  constructor() {
    makeAutoObservable(this)

    makePersistable(this, {
      name: '__SETTINGS__',
      properties: ['mode', 'serveUrl', 'isMock'],
      storage: window.localStorage,
    }).then(() => {
      initMode(this.mode)
    })
  }

  toggleMode() {
    if (this.mode === 'light') {
      this.mode = 'dark'
    } else {
      this.mode = 'light'
    }
    initMode(this.mode)
  }

  changeServeUrl(url: string) {
    this.serveUrl = url
  }

  get isDark() {
    return this.mode === 'dark'
  }
}

export const settingsStore = new SettingsStore()
