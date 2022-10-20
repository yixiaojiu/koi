import Box from '@mui/material/Box'
import { settingsStore } from '@/store/setting.store'
import ThemeConfig from './theme'
import { AppHeader } from '@/layout/AppHeader'
import { AppAsideBar } from '@/layout/AppAsideBar'
import { AppMainContainer } from '@/layout/AppMainContainer'
import { Router } from '@/router'

function App() {
  return (
    <ThemeConfig>
      <Box className="h-screen flex flex-col">
        <AppHeader />
        <div className="flex-1 flex gap-4">
          <AppAsideBar />
          <AppMainContainer>
            <Router />
          </AppMainContainer>
        </div>
      </Box>
    </ThemeConfig>
  )
}

export default App
