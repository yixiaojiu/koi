import { makeAutoObservable } from 'mobx'

export class PlayerStore {
  // 是否暂停
  paused = true
  // 音量
  volume = 1.0
  // 是否全屏
  isFullScreen = false
  constructor() {
    makeAutoObservable(this)
  }
  togglePaused() {
    this.paused = !this.paused
  }
}

export const playerStore = new PlayerStore()
