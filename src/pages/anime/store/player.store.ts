import { makeAutoObservable } from 'mobx'

class PlayerStore {
  paused = true
  constructor() {
    makeAutoObservable(this)
  }
  togglePaused() {
    this.paused = !this.paused
  }
}

export const playerStore = new PlayerStore()
