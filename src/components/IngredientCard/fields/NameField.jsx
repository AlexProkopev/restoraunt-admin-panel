import { Box, Tooltip, Typography } from '@mui/material';
import { fieldBox} from '../IngredientCard.styles';

function NameField({ name, isMobile, onClick}) {
  return (
    <Tooltip title={name}>
      <Box sx={fieldBox} onClick={onClick}>
      <Typography
    variant={isMobile ? 'h6' : 'h5'}
    component="div"
    sx={{
      maxWidth: 200,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      '&:hover': {
        cursor: 'pointer',
        textDecoration: 'underline',
      },
    }}
  >
    {name}
  </Typography>
    </Box>
    </Tooltip>
  );
}

export default NameField;
