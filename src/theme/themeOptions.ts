import type { PaletteOptions } from '@mui/material/styles'

export const THEME_DARK: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#222433',
    dark: '#1e1d2b',
    light: '#2f3042',
  },
  background: {
    paper: '#68c6bd',
    default: '#68c6bd',
  },
  text: {
    primary: '#ffffff',
  },
}

export const THEME_PINK: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#ff8c8c',
    dark: '#f5073e',
    light: '#ffb4be',
  },
  background: {
    paper: '#ff8c8c',
    default: '#ff8c8c',
  },
  text: {
    primary: '#ff8c8c',
  },
}
