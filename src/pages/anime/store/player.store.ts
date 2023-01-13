import { makeAutoObservable } from 'mobx'

export class PlayerStore {
  paused = true
  constructor() {
    makeAutoObservable(this)
  }
  togglePaused() {
    this.paused = !this.paused
  }
}

export const playerStore = new PlayerStore()
