import { Box, ListItem } from '@mui/material';
import { useState } from 'react';
import DishFront from './DishFront/DishFront';
import DishBack from './DishBack/DishBack';
import { listItem, wrapperItem } from './DishItems.styles';

export default function DishItems({ dishItem }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ListItem sx={listItem}>
      <Box onClick={() => setIsFlipped(!isFlipped)} sx={wrapperItem(isFlipped)}>
        <DishFront dish={dishItem} />
        <DishBack dish={dishItem} />
      </Box>
    </ListItem>
  );
}
