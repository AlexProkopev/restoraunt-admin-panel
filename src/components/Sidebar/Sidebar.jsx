import  { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { sidebarStyles } from "./Sidebar.styles";
import { menuItems } from "./services";



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
        <IconButton onClick={toggleDrawer} sx={{ color: "inherit" }}>
          {open ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Box>

      <List sx={sidebarStyles.list}>
        {menuItems.map(({ text, icon, path }) => (
          <Tooltip key={text} title={!open ? text : ""} placement="right">
            <ListItemButton
              sx={sidebarStyles.listItemButton(open, theme)}
              component={Link}
              to={path}
            >
              <ListItemIcon sx={sidebarStyles.listItemIcon(open, theme)}>
                {icon}
              </ListItemIcon>
              {open && <ListItemText primary={text} />}
            </ListItemButton>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
