import { debounce } from '@/shared/utils'
import { PlayerStore } from '@/pages/anime/store/player.store'

export const iconMap = {
  playStateIcon: (pause: boolean) => (pause ? 'i-ic-round-play-arrow' : 'i-ic-round-pause'),
  volumeIcon: (volume: number) => {
    if (volume === 0) {
      return 'i-ic-round-volume-off'
    } else if (volume < 0.5) {
      return 'i-ic-round-volume-mute'
    } else if (volume < 1) {
      return 'i-ic-round-volume-down'
    } else {
      return 'i-ic-round-volume-up'
    }
  },
  fullScreenIcon: (isFullScreen: boolean) => (isFullScreen ? 'i-ic-round-fullscreen-exit' : 'i-ic-round-fullscreen'),
}

export const togglePaused = debounce((playerStore: PlayerStore) => {
  playerStore.togglePaused()
}, 100)
