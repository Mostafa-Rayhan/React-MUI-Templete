import { useState } from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import './App.css';
// import ButtonExample from './components/ButtonExample';
import Sidebar from './components/Sidebar/Sidebar.jsx';


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleDrawerOpen = () => {
    setSidebarOpen(true);
  };

  const handleDrawerClose = () => {
    setSidebarOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(sidebarOpen && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Modern Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar open={sidebarOpen} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* This pushes content down below the app bar */}
        <Container>
          <Typography variant="h4" gutterBottom>
            Welcome to Your Dashboard
          </Typography>
          {/* <ButtonExample /> */}
        </Container>
      </Box>
    </Box>
  );
}

export default App;