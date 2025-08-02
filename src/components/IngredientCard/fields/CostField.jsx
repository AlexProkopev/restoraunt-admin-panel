import { Box, ListItemIcon, Typography } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { fieldBox, fieldIcon } from '../IngredientCard.styles';

function CostField({ costPerUnit, unit, theme }) {
  return (
    <Box sx={fieldBox}>
      <ListItemIcon sx={{ ...fieldIcon(theme), color: 'green' }}> <MonetizationOnIcon/></ListItemIcon>
      <Typography variant="body2" color="text.secondary">{`Цена за ${unit}: ${costPerUnit?.toFixed(2)} UAH`} </Typography>
    </Box>
  );
}

export default CostField;
