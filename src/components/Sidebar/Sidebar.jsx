import { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  SwipeableDrawer,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link, NavLink } from 'react-router-dom';
import { sidebarStyles } from './Sidebar.styles';
import { menuItems } from './services';

const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => setOpen(!open);

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={sidebarStyles.drawer(open, theme)}
    >
      <Box sx={sidebarStyles.logoContainer(open, theme)}>
        <Box sx={sidebarStyles.logoText(open)}>RS</Box>
        <IconButton onClick={toggleDrawer} sx={{ color: 'inherit' }}>
          {open ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Box>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <List sx={sidebarStyles.list}>
          {menuItems.map(({ text, icon, path }) => (
            <Tooltip key={text} title={!open ? text : ''} placement="right">
              <ListItemButton
                component={NavLink}
                to={path}
                sx={({ isActive }) => [
                  sidebarStyles.listItemButton(open, theme),
                  isActive && {
                    backgroundColor: theme.palette.action.selected,
                    '&:hover': {
                      backgroundColor: theme.palette.action.selected,
                    },
                  },
                ]}
              >
                <ListItemIcon sx={sidebarStyles.listItemIcon(open, theme)}>
                  {icon}
                </ListItemIcon>
                {open && <ListItemText primary={text} />}
              </ListItemButton>
            </Tooltip>
          ))}
        </List>
      </SwipeableDrawer>
    </Drawer>
  );
};

export default Sidebar;
