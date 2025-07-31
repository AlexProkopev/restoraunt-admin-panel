import { Box, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { cardWrapperStyles } from '../GuestItem.style';
import dayjs from 'dayjs';

function FieldLastVisit({ date }) {
  return (
    <Box sx={cardWrapperStyles}>
      <AccessTimeIcon color="action" />
      <Typography variant="body2" color="text.secondary">
        Последний визит: {dayjs(date).format('DD.MM.YYYY HH:mm')}
      </Typography>
    </Box>
  );
}

export default FieldLastVisit;
