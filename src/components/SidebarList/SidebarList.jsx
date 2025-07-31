import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { sidebarStyles } from '../Sidebar/Sidebar.styles';
import { menuItems } from '../Sidebar/services';
 

const SidebarList = ({ open, theme }) => {
  const location = useLocation();

  return (
    <List sx={sidebarStyles.list}>
      {menuItems.map(({ text, icon, path }) => {
        const isActive = location.pathname === path;

        return (
          <Tooltip key={text} title={!open ? text : ''} placement="right">
            <ListItemButton
              component={Link}
              to={path}
              selected={isActive}
              sx={sidebarStyles.listItemButton(open, theme)} 
            >
              <ListItemIcon sx={sidebarStyles.listItemIcon(open, theme)}>
                {icon}
              </ListItemIcon>
              {open && <ListItemText primary={text} />}
            </ListItemButton>
          </Tooltip>
        );
      })}
    </List>
  );
};

export default SidebarList;
