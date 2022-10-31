import { makeAutoObservable } from 'mobx'
import type { ThemeMode } from '@/shared/types/theme/theme'
import { makePersistable } from 'mobx-persist-store'

const htmlDom = document.querySelector('html')!
const initMode = (mode: ThemeMode) => {
  htmlDom.className = mode
}
class Setting {
  mode: ThemeMode = 'light'
  constructor() {
    makeAutoObservable(this)

    makePersistable(this, {
      name: '__SETTINGS__',
      properties: ['mode'],
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

  get isDark() {
    return this.mode === 'dark'
  }
}

export const settingsStore = new Setting()
