import {
  Box,
  Typography,
  Tooltip,
  IconButton,
  Divider,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DishInfoField from './DishInfoField';
import DishIngredientsList from './DishIngredientsList';

function DishCardBack({ dishItem }) {
  const { name, category, isAvailable, percent, price, ingredients } = dishItem;

  const cost = (price / (1 + percent / 100)).toFixed(2);

  return (
   <Box
  sx={{
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 3,
    backfaceVisibility: 'hidden',
    backgroundColor: '#212121',
    color: '#fff',
    transform: 'rotateY(180deg)',
    p: 2,
    display: 'flex',
    flexDirection: 'column',
  
    overflow: 'hidden',
  }}
>

  <Box
    sx={{
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
    }}
  >
    <Typography variant="h6" sx={{ mb: 1 }}>{name}</Typography>

    <Box>
      <Typography variant="subtitle2" sx={{ mb: 0.5, opacity: 0.7 }}>
        Основная информация:
      </Typography>
      <DishInfoField label="Категория" value={category} />
      <DishInfoField label="Показано в меню" value={isAvailable ? 'Да' : 'Нет'} />
    </Box>

    <Box sx={{ mt: 1 }}>
      <Typography variant="subtitle2" sx={{ mb: 0.5, opacity: 0.7 }}>
        Цена и наценка:
      </Typography>
      <DishInfoField label="Цена" value={`${price.toFixed(2)} UAH`} />
      <DishInfoField label="Наценка" value={`${percent}%`} />
    </Box>

    <Box sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        Себестоимость: {cost} UAH
      </Typography>
      <Tooltip title="Себестоимость = Цена / (1 + Наценка / 100)">
        <IconButton size="small" sx={{ color: '#aaa', ml: 0.5 }}>
          <InfoOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>

    {ingredients?.length > 0 && (
      <Divider sx={{ my: 2, borderColor: '#444' }} />
    )}
  </Box>

  {ingredients?.length > 0 && (
    <Box
      sx={{
        mt: 1,
        flexGrow: 1,
        overflowY: 'auto',
        pr: 1,
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <DishIngredientsList ingredients={ingredients} />
    </Box>
  )}
</Box>

  );
}

export default DishCardBack;
