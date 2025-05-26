import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingCart } from '@mui/icons-material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

export const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Shop'].map((text, index) => (
          <ListItem key={index} disablePadding>
            <a href="#shop-now" style={{ width: '100%' }}>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingCart />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <IconButton
        size="small"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};
