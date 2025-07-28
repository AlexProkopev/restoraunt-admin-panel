export const paperStyle = (theme) => ({
  bgcolor: "background.paper",
  px: 2,
  py: 1,
  borderRadius: 2,
  backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#f5f5f5",
});

export const listItemStyle = {
  flexDirection: "column",
  alignItems: "flex-start",
  paddingLeft: 0,
  paddingRight: 0,
};

export const firstInfoRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export const infoRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  mt: 1,
};

export const listItemIconStyle = {
  minWidth: 32,
};
