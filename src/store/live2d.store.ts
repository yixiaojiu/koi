import { makeAutoObservable } from 'mobx'

class Live2d {
  visible = true
  constructor() {
    makeAutoObservable(this)
  }
}

export const live2dStore = new Live2d()
