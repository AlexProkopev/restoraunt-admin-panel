export const formBoxStyle = (isMobile, theme) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  padding: isMobile ? 2 : 3,
  borderRadius: 2,
  backgroundColor: theme.palette.background.paper,
});

export const titleStyle = {
  fontWeight: 'medium',
  mb: 1,
};

export const fieldStyle = {
  width: '100%',
};
