import { Typography, Box } from '@mui/material';

export default function MarkupField({ percent }) {
  return (
    <Box sx={{ mt: 1 }}>
      <Typography variant="body2">Наценка: {percent}%</Typography>
    </Box>
  );
}