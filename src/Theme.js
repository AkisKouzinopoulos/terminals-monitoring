import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#133676',
      dark: '#2e85d4', // Hover colour which in our case is a lighter colour
    },
    secondary: {
      main: '#2e85d4',
    },
    text: {
      primary: '#000000',
    },
    background: {
      default: '#ffffff',
    },
    error: {
      main: '#E02826',
    },
    success: {
      main: '#00AD50',
      light: '#48C830',
    },
    divider: '#707070',
  },
  typography: {
    h1: {
      fontSize: 22,
      fontWeight: 400,
    },
    h2: {
      fontSize: 20,
      fontWeight: 300,
    },
    h3: {
      fontSize: 16,
      fontWeight: 500,
    },
    h4: {
      fontSize: 16,
      fontWeight: 300,
    },
    h5: {
      fontSize: 14,
      fontWeight: 700,
    },
    h6: {
      fontSize: 14,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: 1,
      fontWeight: 300,
    },
    button: {
      fontSize: 16,
      fontWeight: 400,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    caption: {
      fontSize: 14,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: '#000',
          '&:hover': {
            background: 'transparent',
            color: '#2e85d4',
          },
        },
        startIcon: {
          marginRight: '4px',
          '& > :nth-of-type(1)': {
            fontSize: '22px',
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: 'rgb(221 221 221 / 50%)',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#FFF',
          p: 0,
          boxShadow:
            '0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          '& .MuiTooltip-arrow': {
            color: 'var(--white)',
          },
          '.MuiTooltip-arrow: before': {
            boxShadow: '1px 1px 1px 0px rgb(0 0 0 / 25%)',
          },
        },
      },
    },
  },
});
