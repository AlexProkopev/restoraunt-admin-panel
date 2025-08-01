import { createTheme } from '@mui/material/styles';

const commonTypography = {
  fontFamily: `'Ubuntu', sans-serif`,
  h1: { fontWeight: 700 },
  h2: { fontWeight: 600 },
  body1: { fontWeight: 400 },
  button: {fontFamily: `'Ubuntu', sans-serif`, display: "block",},
  overflow: 'unset' 
};

const commonThemeParts = {
  typography: commonTypography,
  components: {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          overflow: 'visible',
          maxHeight: 'none',
        },
      },
    },
  },
};



const lightTheme = createTheme({
  ...commonThemeParts,
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#fff',
      paper: '#f5f5f5',
    },
   
    customColors: {
      buttonText: '#875',
      buttonHoverBg: '#eee',
      collorText: '#666666',
      collorHover: '#345',
    },
  },
});

const darkTheme = createTheme({
  ...commonThemeParts,
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    customColors: {
      buttonText: '#fff',
      buttonHoverBg: '#345',
      collorText: '#CCCCCC',
      collorHover: '#345',
    },
  },
});

export { lightTheme, darkTheme };


export const themeFromLocal = () => {
    const stored = localStorage.getItem('theme');
    return stored === 'dark';}

export const handleToggleTheme = (setIsDark,isDark) => {
    setIsDark(!isDark);
  };
