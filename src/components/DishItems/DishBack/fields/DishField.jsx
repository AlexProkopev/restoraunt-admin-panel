import { Typography, Box } from '@mui/material';

export default function DishField({ label, value, sx }) {
  return (
    <Box sx={sx}>
      <Typography variant="body2">
        {label}: {value}
      </Typography>
    </Box>
  );
}