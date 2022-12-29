import type { Components, PaletteOptions, Theme } from '@mui/material/styles'

export const THEME_DARK: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#222433',
    dark: '#1e1d2b',
    light: '#2f3042',
  },

  warning: {
    main: '#bebebe',
    dark: '#d5d6d9',
  },

  background: {
    paper: '#68c6bd',
    default: '#2f3042',
  },
  text: {
    primary: '#ffffff',
    secondary: '#b4b4bb',
  },
}

export const THEME_PINK: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#ff8c8c',
    dark: '#f5073e',
    light: '#ffb4be',
  },
  warning: {
    main: '#ffd2d8',
    dark: '#ffc3cb',
  },
  background: {
    paper: '#ff8c8c',
    default: '#ffffff',
  },
  text: {
    primary: '#ffb4be',
    secondary: '#bebebe',
  },
}

export const THEME_COMPONENTS: Components<Omit<Theme, 'components'>> = {}
