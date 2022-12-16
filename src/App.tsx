import Box from '@mui/material/Box'
import ThemeConfig from './theme'
import { Router } from '@/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <ThemeConfig>
      <QueryClientProvider client={queryClient}>
        <Box className="h-screen flex flex-col overflow-hidden">
          <Router />
        </Box>
      </QueryClientProvider>
    </ThemeConfig>
  )
}

export default App
