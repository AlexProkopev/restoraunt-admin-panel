import { Box, ListItemIcon, ListItemText } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { firstInfoRowStyle, listItemIconStyle } from "../BookingItem/BookingItem.styles";

function BookingPhone({ phone }) {
  return (
    <Box sx={firstInfoRowStyle}>
      <ListItemIcon sx={listItemIconStyle}>
        <PhoneIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary={`Номер: ${phone}`} />
    </Box>
  );
}

export default BookingPhone;
