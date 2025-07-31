import { Box, Typography, Tooltip } from '@mui/material';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { cardWrapperStyles } from '../GuestItem.style';

function FieldVisit({ count }) {
  return (
    <Tooltip title="Визиты учитываются, если гость был за столом — статус брони переходил в 'На месте'">
      <Box sx={cardWrapperStyles}>
        <EventRepeatIcon color="action" />
        <Typography variant="body1" fontWeight={500}>
          Визитов: {count}
        </Typography>
      </Box>
    </Tooltip>
  );
}

export default FieldVisit;
