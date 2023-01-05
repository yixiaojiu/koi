import { Components } from '@mui/material/styles'

export const MuiTypography: Components['MuiTypography'] = {
  styleOverrides: {
    root: {
      fontFamily: 'SmileySans',
    },
    h2: {
      fontSize: '1.5rem',
      fontFamily: 'bold',
    },
  },
}
