import ThemeConfig from './theme'
import { Router } from '@/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Live2d, InitOption } from '@/components/live2d/Live2d'
import { observer } from 'mobx-react-lite'
import { settingsStore } from '@/store/setting.store'

const initOption: InitOption = {
  model: '/live2dModels/koharu/koharu.model.json',
  version: 2,
  size: {
    width: 210,
    height: 260,
  },
}

const Live2dControler = observer(() => {
  if (settingsStore.live2dShow) {
    return <Live2d initOption={initOption} motionName="else" />
  } else {
    return null
  }
})

function App() {
  const queryClient = new QueryClient()
  return (
    <ThemeConfig>
      <QueryClientProvider client={queryClient}>
        <div className="h-screen flex flex-col overflow-hidden bg-[var(--bg-color)] text-[var(--font-color)] min-w-[1100px]">
          <Live2dControler />
          <Router />
        </div>
      </QueryClientProvider>
    </ThemeConfig>
  )
}

export default App
