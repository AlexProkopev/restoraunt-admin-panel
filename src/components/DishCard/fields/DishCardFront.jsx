import { Box, Typography } from '@mui/material';

function DishCardFront({ dishItem }) {
  const { name, category, photo } = dishItem;

  return (
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
  );
}

export default DishCardFront;
