import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Collapse,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDishes } from '../../redux/dishes/services';
import { selectDishes } from '../../redux/dishes/dishes.selectors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const defaultImage = 'https://chef.ru/wp-content/uploads/2024/09/zelenye-tomaty-kolrabi-kryzhovnik.jpg';

function Dishes() {
  const dispatch = useDispatch();
  const dishes = useSelector(selectDishes);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  const handleToggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" mb={3}>Блюда</Typography>

      <Grid container spacing={2}>
        {dishes?.map((dish) => (
          <Grid item xs={12} md={6} key={dish._id}>
            <Card sx={{ display: 'flex', borderRadius: 4, overflow: 'hidden', boxShadow: 3 }}>
              
              <Box sx={{ width: 120, height: 120, flexShrink: 0 }}>
                <img
                  src={defaultImage}
                  alt={dish.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 1 auto' }}>
                  <Typography variant="h6" fontWeight={600}>{dish.name}</Typography>

                  <Box mt={1} display="flex" gap={1} flexWrap="wrap">
                    <Chip size="small" label={dish.category} color="info" />
                    <Chip size="small" label={`Вес: ${dish.weight} г`} />
                    <Chip size="small" label={`Цена: ${dish.price.toFixed(2)}₽`} color="primary" />
                    <Chip
                      size="small"
                      label={dish.isAvailable ? 'В наличии' : 'Нет в наличии'}
                      color={dish.isAvailable ? 'success' : 'error'}
                    />
                  </Box>

                  <Button
                    size="small"
                    onClick={() => handleToggle(dish._id)}
                    endIcon={expandedId === dish._id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    sx={{ mt: 1, px: 0 }}
                  >
                    Ингредиенты
                  </Button>

                  <Collapse in={expandedId === dish._id}>
                    <Box mt={1}>
                      <Divider sx={{ mb: 1 }} />
                      {dish.ingredients.length > 0 ? (
                        dish.ingredients?.map((ing) => (
                          <Typography key={ing._id} variant="body2" sx={{ mb: 0.5 }}>
                            • {ing.ingredient.name} - {ing.quantity} {ing.ingredient.unit} × {ing.ingredient.costPerUnit?.toFixed(2)}₽ = <b>{(ing.quantity * ing.ingredient.costPerUnit)?.toFixed(2)}₽</b>
                          </Typography>
                        ))
                      ) : (
                        <Typography variant="body2">Нет ингредиентов</Typography>
                      )}
                    </Box>
                  </Collapse>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Dishes;
