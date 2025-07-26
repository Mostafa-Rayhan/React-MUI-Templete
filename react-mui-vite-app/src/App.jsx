import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDrawer = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar toggleDrawer={toggleDrawer} />
      <Sidebar open={sidebarOpen} onClose={toggleDrawer} />
      {/* Your other components */}
    </Box>
  );
}

export default App;