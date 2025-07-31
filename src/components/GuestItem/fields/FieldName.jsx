import { Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { cardWrapperStyles } from '../GuestItem.style';

function FieldName({ name }) {
  return (
    <Box sx={cardWrapperStyles}>
      <PersonIcon color="action" />
      <Typography variant="body1" fontWeight={500}>
        {name}
      </Typography>
    </Box>
  );
}

export default FieldName;
