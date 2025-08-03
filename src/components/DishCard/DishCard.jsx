import { Box, ListItem } from '@mui/material';
import { useState } from 'react';
import DishCardFront from './DishCardFront';
import DishCardBack from './DishCardBack';

function DishCard({ dishItem }) {
  const [isFlipped, setIsFlipped] = useState(false);

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
        <DishCardFront dishItem={dishItem} />
        <DishCardBack dishItem={dishItem} />
      </Box>
    </ListItem>
  );
}

export default DishCard;
