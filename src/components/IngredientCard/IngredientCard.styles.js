export const listItem = () => ({
  justifyContent: 'center',
  width: 'auto',
});

export const card = (isMobile, isTablet, theme) => ({
  width: 280,
  minHeight: '300px',
  borderRadius: 2,
  padding: isMobile ? theme.spacing(1.5) : theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden',
  boxSizing: 'border-box',
});
export const titleBox = {
  display: 'flex',
  alignItems: 'center',
  mb: 1,
};

export const fieldBox = {
  display: 'flex',
  alignItems: 'center',
  mb: 1,
};

export const fieldIcon = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.secondary.main,
  minWidth: 'auto',

  mr: 1,
});
