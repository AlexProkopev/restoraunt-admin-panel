import { Box, ListItemIcon, Typography } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import { fieldBox, fieldIcon } from '../IngredientCard.styles';

function StockField({ stock, unit, theme }) {
  const isOutOfStock = stock === 0;
  const textContent = isOutOfStock ? 'Нет в наличии' : `Остаток: ${stock} ${unit}`
  return (
    <Box sx={fieldBox}>
      <ListItemIcon sx={{ ...fieldIcon(theme), color: isOutOfStock ? theme.palette.error.main :   'green'  }}><InventoryIcon /></ListItemIcon>
      <Typography variant="body2" color={isOutOfStock ? 'error' : 'text.secondary'} fontWeight={isOutOfStock ? 'bold' : 'normal'}>
        {textContent}
      </Typography>
    </Box>
  );
}

export default StockField;
