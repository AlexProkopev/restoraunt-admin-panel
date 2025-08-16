import { Typography, Box } from '@mui/material';

export default function PriceField({ price }) {
  return (
    <Box>
      <Typography variant="body2">Цена: {price.toFixed(2)} UAH</Typography>
    </Box>
  );
}