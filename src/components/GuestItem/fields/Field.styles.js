export const actionWrapper = (theme) => ({
  cursor: 'pointer',
  color: theme.palette.primary.main,
  '&:hover': { textDecoration: 'underline' },
});
