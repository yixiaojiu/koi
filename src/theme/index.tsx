import { ThemeProvider, createTheme } from '@mui/material/styles'
import { observer } from 'mobx-react-lite'
import { settingsStore } from '@/store/setting.store'
import type { ReactNode } from 'react'
import { useState } from 'react'
import { THEME_COMPONENTS, THEME_DARK, THEME_PINK } from './themeOptions'

const ThemeConfig = observer((props: { children: ReactNode }) => {
  const [settings] = useState(() => settingsStore)
  const theme = createTheme({
    palette: settings.mode === 'dark' ? THEME_DARK : THEME_PINK,
    components: THEME_COMPONENTS,
  })
  return (
    <>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </>
  )
})

export default ThemeConfig
