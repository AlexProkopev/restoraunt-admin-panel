import { Box, ListItemIcon, Typography } from '@mui/material';
import ScaleIcon from '@mui/icons-material/Scale';
import { fieldBox, fieldIcon } from '../IngredientCard.styles';


function UnitField({ ingredient, theme }) {
 
  return (
    <Box sx={fieldBox}>
      <ListItemIcon sx={fieldIcon(theme)}>
        <ScaleIcon  sx={{ color: 'green' }}/>
      </ListItemIcon>
      <Typography variant="body2" color="text.secondary">
        На сумму {ingredient.stock * ingredient.costPerUnit} UAH
      </Typography>
    </Box>
  );
}

export default UnitField;
