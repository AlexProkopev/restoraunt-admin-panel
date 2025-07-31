export const getBoxStyle = (color) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
  maxWidth: 400,
  mx: 'auto',
  p: 3,
  borderRadius: 2,
  bgcolor: color + '20',
  border: `1px solid ${color}`,
  color: color,
  boxShadow: 3,
});

export const titleStyle = {
  variant: 'h6',
  textAlign: 'center',
};

export const getStatusStyle = (color) => ({
  variant: 'h6',
  textAlign: 'center',
  color: color,
  fontWeight: 600,
});

export const formControlStyle = {
  variant: 'standard',
  fullWidth: true,
};