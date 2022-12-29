import Box from '@mui/material/Box'
import ThemeConfig from './theme'
import { Router } from '@/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Live2d, InitOption } from '@/components/live2d/Live2d'

const initOption: InitOption = {
  model: '/live2dModels/koharu/koharu.model.json',
  version: 2,
  size: {
    width: 210,
    height: 260,
  },
}

function App() {
  const queryClient = new QueryClient()
  return (
    <ThemeConfig>
      <QueryClientProvider client={queryClient}>
        <Box className="h-screen flex flex-col overflow-hidden">
          <Live2d initOption={initOption} motionName="else" />
          <Router />
        </Box>
      </QueryClientProvider>
    </ThemeConfig>
  )
}

export default App
