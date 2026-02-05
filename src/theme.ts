import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#07281C',      // evergreen
      dark: '#0D3425',      // evergreen-2
      light: '#49836D',     // jungle-teal
    },
    secondary: {
      main: '#DBF7EE',      // frozen-water
    },
    background: {
      default: '#DBF7EE',   // soft background
      paper: '#07281B',     // evergreen-3
    },
    text: {
      primary: '#07281C',
      secondary: '#49836D',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Lora', 'serif'].join(','),
    h3: { fontWeight: 700, color: '#07281C' },
    h4: { fontWeight: 600, color: '#07281C' },
    h5: { fontWeight: 500, color: '#07281C' },
    body1: { color: '#07281C' },
    body2: { color: '#49836D' },
  },
  components: {
    MuiButton: {
      styleOverrides: { root: { borderRadius: 8, textTransform: 'none' } },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' } },
    },
  },
});

export default theme;
