import { Box, Typography, List, ListItem } from '@mui/material';
import { listItem } from '../DishBack.styles';


export default function IngredientsField({ ingredients }) {
  if (!ingredients?.length) return null;

  return (
    <Box mt={2}>
      <Typography variant="subtitle2" gutterBottom>
        Ингредиенты:
      </Typography>
      <List dense>
        {ingredients.map((el) => (
          <ListItem key={el._id} sx={listItem}>
            <Typography variant="body2">{el.ingredient?.name}</Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: 11 }}>
              {el?.quantity} {el.ingredient?.unit} -{' '}
              {(el.ingredient?.costPerUnit * el?.quantity).toFixed(2)} UAH
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}