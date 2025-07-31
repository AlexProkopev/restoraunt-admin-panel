export const listItemStyles = (theme) => ({
  maxWidth: 340,
  py: 2,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    px: 1,
  },
});

export const cardItemStyles = (theme) => ({
  width: '100%',
  bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100',
  boxShadow: theme.shadows[4],
  borderRadius: 3,
  transition: 'background-color 0.3s',
  [theme.breakpoints.down('sm')]: {
    boxShadow: theme.shadows[1],
    borderRadius: 2,
  },
});

export const cardContentStyles = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  alignItems: 'center',
  textAlign: 'center',
  color: theme.palette.text.primary,
  px: 2,
  [theme.breakpoints.down('sm')]: {
    px: 1,
    gap: 1.5,
  },
});

export const cardWrapperStyles = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  [theme.breakpoints.down('sm')]: {
    gap: 0.5,
  },
});
