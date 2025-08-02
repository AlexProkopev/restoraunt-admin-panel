import { alpha } from '@mui/material/styles';

export const container =(showFilters)=> {
return {
   p: 3,
  borderRadius: 2,
  maxHeight:'500px',
  textAlign: 'center',
  transition: 'max-height 0.3s ease',
  overflow: 'hidden',
  mb:'10px'
}
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

export const fieldsContainer = (showFilters) => {
  return {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
    maxHeight: showFilters ? '500px' : 0,
    opacity: showFilters ? 1 : 0,
    pointerEvents: showFilters ? 'auto' : 'none',
    transition: 'all 0.3s ease',
    
  };
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
