import { Box, ListItemIcon, Typography } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import { fieldBox, fieldIcon } from '../IngredientCard.styles';
import EditStockIngredients from '../../EditStockIngredients/EditStockIngredients';

function StockField({ stock, unit, theme,id }) {
  const isOutOfStock = stock === 0;
  const textContent = isOutOfStock ? 'Нет в наличии' : `Остаток: ${stock} ${unit}`
  return (
    <Box sx={fieldBox}>
      <ListItemIcon sx={{ ...fieldIcon(theme), color: isOutOfStock ? theme.palette.error.main :   'green'  }}><InventoryIcon /></ListItemIcon>
      <Box display="flex" alignItems="center" gap={1}>
        <Typography variant="body2" color={isOutOfStock ? 'error' : 'text.secondary'} fontWeight={isOutOfStock ? 'bold' : 'normal'}>
        {textContent}
      </Typography>
      <EditStockIngredients id={id}>Изменить</EditStockIngredients>
      </Box>
    </Box>
  );
}

export default StockField;
