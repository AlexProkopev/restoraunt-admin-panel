import { Box, Typography, List, ListItem } from '@mui/material';

function DishIngredientsList({ ingredients }) {
  return (
    <Box mt={2}>
      <Typography variant="subtitle2" gutterBottom>
        Ингредиенты:
      </Typography>
      <Box
        sx={{
          maxHeight: 180,   // Ограничиваем высоту, подбирай под дизайн
          overflowY: 'auto',
          pr: 1,            // Отступ справа под скролл
        }}
      >
        <List dense>
          {ingredients.map((el) => (
            <ListItem
              key={el._id}
              sx={{ display: 'flex', flexDirection: 'column', px: 0 }}
            >
              <Typography variant="body2">{el.ingredient.name}</Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontSize: 11 }}
              >
                {el.quantity} {el.ingredient.unit} —{' '}
                {(el.ingredient.costPerUnit * el.quantity).toFixed(2)} UAH
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default DishIngredientsList;
