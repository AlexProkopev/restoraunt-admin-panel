import { Box, ListItemIcon, ListItemText } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { format, parseISO } from "date-fns";
import { infoRowStyle, listItemIconStyle } from "../BookingItem/BookingItem.styles";

function BookingTime({ date }) {
  return (
    <Box sx={infoRowStyle}>
      <ListItemIcon sx={listItemIconStyle}>
        <AccessTimeIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary={`Время: ${format(parseISO(date), "dd.MM.yy HH:mm")}`} />
    </Box>
  );
}

export default BookingTime;
