import { observer } from 'mobx-react-lite'
import { settingsStore } from '@/store/setting.store'
import { useState } from 'react'

const Content = observer(() => {
  const [setting] = useState(settingsStore)
  return (
    <div>
      <button className="text-sky" onClick={() => setting.toggleLive2dShow()}>
        切换live2d
      </button>
    </div>
  )
})

export default function Setting() {
  return (
    <div className="min-h-full p-10">
      <Content />
    </div>
  )
}
