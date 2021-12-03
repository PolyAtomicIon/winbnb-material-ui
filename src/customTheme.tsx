import { createTheme } from '@mui/material';

export default createTheme({
  palette: {
    primary: {
      main: '#EB5757',
      light: '#F47E7E',
      dark: '#EB5757',
    },
    secondary: {
      main: '#333333',
      light: '#BDBDBD',
    },
    info: {
      main: '#4F4F4F'
    },
    grey: {
      600: '#BDBDBD',
    }
  },
  shape: {
    borderRadius: 16
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    h2: {
      fontSize: 14,
      fontWeight: 'bold'
    },
    h3: {
      fontSize: 14,
    },  
    subtitle1: {
      fontSize: 9,
      fontWeight: 800,
      fontFamily: 'Mulish, Roboto, Helvetica, sans-serif',
      textTransform: 'uppercase'
    },
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
