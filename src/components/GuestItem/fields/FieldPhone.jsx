import { Box, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { cardWrapperStyles } from '../GuestItem.style';

function FieldPhone({ phone }) {
  return (
    <Box sx={cardWrapperStyles}>
      <PhoneIcon color="action" />
      <Typography variant="body1" fontWeight={500}>
        {phone}
      </Typography>
    </Box>
  );
}

export default FieldPhone;
