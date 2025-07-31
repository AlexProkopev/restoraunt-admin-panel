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
  useMediaQuery,
  Fade,
} from '@mui/material';
import { ChevronLeft, ChevronRight, Menu } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { sidebarStyles } from './Sidebar.styles';
import { menuItems } from './services';

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen((prev) => !prev);

  const renderDrawerContent = () => (
    <>
      <Box sx={sidebarStyles.logoContainer(open, theme)}>
        <Box sx={sidebarStyles.logoText(open)}>RS</Box>
        <IconButton onClick={toggleDrawer} sx={{ color: 'inherit' }}>
          {open ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Box>

      <List sx={sidebarStyles.list}>
        {menuItems.map(({ text, icon, path }) => (
          <Tooltip key={text} title={!open ? text : ''} placement="right">
            <ListItemButton
              component={NavLink}
              to={path}
              onClick={isMobile ? toggleDrawer : undefined}
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
    </>
  );

  return (
    <>
      {isMobile && (
        <Fade in={!open}>
          <IconButton
            onClick={toggleDrawer}
            size="large"
            sx={{
              position: 'fixed',
              top: theme.spacing(1.5),
              left: theme.spacing(1.5),
              zIndex: theme.zIndex.drawer + 10,
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.shadows[4],
              '&:hover': {
                backgroundColor: theme.palette.grey[200],
              },
              transition: 'transform 0.3s ease',
            }}
            aria-label="open drawer"
          >
            <Menu />
          </IconButton>
        </Fade>
      )}

      {isMobile ? (
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
          sx={sidebarStyles.drawer(open, theme)}
        >
          {renderDrawerContent()}
        </SwipeableDrawer>
      ) : (
        <Drawer
          variant="permanent"
          open={open}
          sx={sidebarStyles.drawer(open, theme)}
        >
          {renderDrawerContent()}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
