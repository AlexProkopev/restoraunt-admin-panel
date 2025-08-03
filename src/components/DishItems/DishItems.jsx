import {
  Box,
  IconButton,
  ListItem,
  Tooltip,
  Typography,
  List,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState } from 'react';

function DishItems({ dishItem }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { name, category, isAvailable, percent, price, photo, ingredients } = dishItem;

  const cost = (price / (1 + percent / 100)).toFixed(2);

  return (
    <ListItem
      sx={{
        perspective: '1000px',
        width: 240,
        height: 320,
        m: 2,
      }}
    >
      <Box
        onClick={() => setIsFlipped(!isFlipped)}
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s ease',
          borderRadius: 3,
          boxShadow: '0 0 15px #00000099',
          transform: isFlipped ? 'rotateY(180deg)' : 'none',
        }}
      >
        {/* Front Side */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: 3,
            backfaceVisibility: 'hidden',
            overflow: 'hidden',
            backgroundColor: '#1c1c1c',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            cursor: 'pointer',
          }}
        >
          <Box
            component="img"
            src={photo}
            alt={name}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              zIndex: 1,
              p: 2,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(3px)',
              color: '#fff',
            }}
          >
            <Typography variant="body2" sx={{ mb: 0.5, opacity: 0.8 }}>
              {category}
            </Typography>
            <Typography variant="h6">{name}</Typography>
          </Box>
        </Box>

        {/* Back Side */}
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
            justifyContent: 'space-between',
            overflowY: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          <Box>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2">Категория: {category}</Typography>
            <Typography variant="body2">
              Показано в меню: {isAvailable ? 'Да' : 'Нет'}
            </Typography>
            <Typography variant="body2">Цена: {price.toFixed(2)} UAH</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Наценка: {percent}%
            </Typography>

            <Box display="flex" alignItems="center">
              <Typography variant="body2">
                Себестоимость: {cost} UAH
              </Typography>
              <Tooltip title="Себестоимость = Цена / (1 + Наценка / 100)">
                <IconButton size="small" sx={{ color: '#aaa' }}>
                  <InfoOutlinedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          {ingredients?.length > 0 && (
            <Box mt={2}>
              <Typography variant="subtitle2" gutterBottom>
                Ингредиенты:
              </Typography>
              <List dense>
                {ingredients.map((el) => (
                  <ListItem
                    key={el._id}
                    sx={{ display: 'flex', flexDirection: 'column', px: 0 }}
                  >
                    <Typography variant="body2">
                      {el.ingredient.name}
                    </Typography>
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
          )}
        </Box>
      </Box>
    </ListItem>
  );
}

export default DishItems;
