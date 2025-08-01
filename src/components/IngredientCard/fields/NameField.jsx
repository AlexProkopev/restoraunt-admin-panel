import { Box, Typography } from '@mui/material';
import { fieldBox} from '../IngredientCard.styles';

function NameField({ name, isMobile}) {
  return (
    <Box sx={fieldBox}>
      <Typography variant={isMobile ? 'h6' : 'h5'} component="div"> {name} </Typography>
    </Box>
  );
}

export default NameField;
