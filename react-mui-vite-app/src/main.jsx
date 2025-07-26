import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <CssBaseline />
      <App />
    </StrictMode>
  </ThemeProvider>
  
)
