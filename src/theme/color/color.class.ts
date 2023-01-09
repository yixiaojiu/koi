import { SYSTEM_COLOR, THEME_DARK, THEME_PINK } from '@/theme/color/constant'
import type { ThemeMode } from '@/shared/types/theme'

class ThemeColor {
  private _mode: ThemeMode

  constructor(mode: ThemeMode) {
    this._mode = mode
    this.colorVarChange()
  }

  changeMode(mode: ThemeMode) {
    this._mode = mode
    this.colorVarChange()
  }

  colorVarChange() {
    const colorCollection = this._mode === 'light' ? THEME_PINK : THEME_DARK
    SYSTEM_COLOR.forEach((item, index) => {
      document.documentElement.style.setProperty(item.var, colorCollection[index])
    })
  }
}

let themeColor: ThemeColor | null

export function createTheme(mode: ThemeMode) {
  if (!themeColor) {
    themeColor = new ThemeColor(mode)
  }
}

export function getThemeColorInstance() {
  return themeColor
}

/**
 * 主题实例
 */
// let themeInstance: Theme | null
// export function createTheme() {
//   if (!themeInstance) {
//     themeInstance = new Theme()
//   }
//   return themeInstance
// }
// export function getThemeInstance() {
//   return themeInstance
// }
