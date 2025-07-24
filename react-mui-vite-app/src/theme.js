import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  mixins: {
    sidebar: {
      width: 73, // collapsed width
    },
  },
});

export default theme;