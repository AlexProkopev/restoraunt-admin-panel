import { Box, ListItemIcon, ListItemText } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { infoRowStyle, listItemIconStyle } from "../BookingItem/BookingItem.styles";

function BookingName({ name }) {
  return (
    <Box sx={infoRowStyle}>
      <ListItemIcon sx={listItemIconStyle}>
        <PersonIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary={`Имя: ${name}`} />
    </Box>
  );
}

export default BookingName;
