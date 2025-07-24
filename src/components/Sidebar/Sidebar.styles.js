export const drawerWidthOpen = 240;
export const drawerWidthClosed = 60;

export const sidebarStyles = {
  drawer: (open, theme) => ({
    width: open ? drawerWidthOpen : drawerWidthClosed,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    "& .MuiDrawer-paper": {
      width: open ? drawerWidthOpen : drawerWidthClosed,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: "hidden",
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    },
  }),

  logoContainer: (open, theme) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: open ? "space-between" : "center",
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    userSelect: "none",
  }),

  logoText: (open) => ({
    fontWeight: "bold",
    fontSize: "1.5rem",
    display: open ? "block" : "none",
    userSelect: "none",
  }),

  list: {
    marginTop: 2,
    flexGrow: 1,
  },

  listItemButton: (open, theme) => ({
    minHeight: 48,
    justifyContent: open ? "initial" : "center",
    px: 2.5,
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  }),

  listItemIcon: (open, theme) => ({
    minWidth: 0,
    mr: open ? 3 : "auto",
    justifyContent: "center",
    color: theme.palette.text.secondary,
  }),

  themeSwitchContainer: (open) => ({
    display: "flex",
    alignItems: "flex-end",
    marginTop: '5px',
    justifyContent: open ? "space-around" : "center",
    padding: "8px 0",
    borderTop: "1px solid rgba(0,0,0,0.12)",
  }),
};
