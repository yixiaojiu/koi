import Box from '@mui/material/Box'
import ThemeConfig from './theme'
import { Router } from '@/router'

function App() {
  return (
    <ThemeConfig>
      <Box className="h-screen flex flex-col overflow-hidden">
        <Router />
      </Box>
    </ThemeConfig>
  )
}

export default App
