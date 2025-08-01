import { alpha } from '@mui/material/styles';

export const container = {
  p: 3,
  borderRadius: 2,
  boxShadow: 3,
 textAlign:'center',
  maxWidth: 500,
  mx: 'auto',
  transition: 'max-height 0.3s ease',
  overflow: 'hidden',
 
};

export const toggleButton = {
  mb: 2,
  cursor: 'pointer',
  userSelect: 'none',
  color: 'primary.main',
  fontWeight: 'bold',
  '&:hover': {
    color: 'primary.dark',
  },
};

export const fieldsContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 2,
};

export const fieldBox = {
  flex: '1 1 140px',
  minWidth: 140,
};

export const stockCheckbox = {
  display: 'flex',
  alignItems: 'center',
  pl: 1,
  borderRadius: 1,
  bgcolor: (theme) => alpha(theme.palette.primary.light, 0.15),
  maxHeight: 56,
};
