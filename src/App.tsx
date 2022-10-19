import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { settingsStore } from '@/store/setting.store'
import ThemeConfig from './theme'

function App() {
  return (
    <ThemeConfig>
      <Box className="h-screen gap-2 flex flex-col justify-center items-center">
        <Button onClick={() => settingsStore.toggleMode()} variant="contained" color="primary">
          Hello World
        </Button>
      </Box>
    </ThemeConfig>
  )
}

export default App
