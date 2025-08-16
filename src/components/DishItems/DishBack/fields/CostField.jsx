import { Typography, Box, Tooltip, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function CostField({ price, percent }) {
  const cost = (price / (1 + percent / 100)).toFixed(2);

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body2">Себестоимость: {cost} UAH</Typography>
      <Tooltip title="Себестоимость = Цена / (1 + Наценка / 100)">
        <IconButton size="small" sx={{ color: '#aaa' }}>
          <InfoOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
}