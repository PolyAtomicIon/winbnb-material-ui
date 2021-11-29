import { createTheme } from '@mui/material';

export default createTheme({
  palette: {
    primary: {
      main: '#EB5757',
      light: '#F47E7E',
      dark: '#EB5757',
    }
  },
  shape: {
    borderRadius: 16
  },
  typography: {
    fontFamily: 'Montserrat',
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    button: {
      fontWeight: 'bold',
      fontFamily: 'Mulish, Roboto, Helvetica, sans-serif',
      textTransform: 'capitalize'
    }
  },
});
