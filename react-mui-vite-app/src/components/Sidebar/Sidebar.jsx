import React, { useState } from 'react';
import { 
  Drawer, 
  List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Collapse,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Dashboard,
  ShoppingCart,
  People,
  Inventory,
  Settings,
  ExpandLess,
  ExpandMore,
  StarBorder
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Sidebar({ open, onClose }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuClick = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const menuItems = [
    { 
      text: 'Dashboard', 
      icon: <Dashboard />, 
      path: '/' 
    },
    { 
      text: 'Products', 
      icon: <ShoppingCart />, 
      subItems: [
        { text: 'All Products', path: '/products' },
        { text: 'Categories', path: '/categories' },
        { text: 'Featured', path: '/featured' }
      ] 
    },
    { 
      text: 'Customers', 
      icon: <People />, 
      path: '/customers' 
    },
    { 
      text: 'Inventory', 
      icon: <Inventory />, 
      subItems: [
        { text: 'Stock', path: '/stock' },
        { text: 'Orders', path: '/orders' }
      ] 
    },
    { 
      text: 'Settings', 
      icon: <Settings />, 
      path: '/settings' 
    }
  ];

  return (
    <Drawer
      sx={{
        width: open ? drawerWidth : theme.mixins.sidebar.width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : theme.mixins.sidebar.width,
          boxSizing: 'border-box',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }}
      variant={isMobile ? 'temporary' : 'persistent'}
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <DrawerHeader />
      <Divider />
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            {item.subItems ? (
              <>
                <ListItemButton onClick={() => handleSubMenuClick(item.text)}>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                  {openSubMenu === item.text ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openSubMenu === item.text} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <ListItemButton 
                        key={subItem.text} 
                        sx={{ pl: 4 }}
                        selected={window.location.pathname === subItem.path}
                      >
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={subItem.text} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItemButton
                selected={window.location.pathname === item.path}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}