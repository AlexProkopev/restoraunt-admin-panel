import { Typography } from '@mui/material';

function DishInfoField({ label, value }) {
  return (
    <Typography variant="body2">
      {label}: {value}
    </Typography>
  );
}

export default DishInfoField;
