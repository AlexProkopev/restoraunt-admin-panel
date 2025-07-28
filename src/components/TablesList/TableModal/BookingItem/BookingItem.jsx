import { ListItem, Paper } from "@mui/material";
import {
  paperStyle,
  listItemStyle,
} from "./BookingItem.styles";
import BookingPhone from "../field/BookingPhone";
import BookingName from "../field/BookingName";
import BookingTime from "../field/BookingTime";


function BookingItem({ booking }) {
  return (
    <Paper elevation={3} sx={paperStyle}>
      <ListItem disableGutters sx={listItemStyle}>
        <BookingPhone phone={booking.phone} />
        <BookingName name={booking.name} />
        <BookingTime date={booking.date} />
      </ListItem>
    </Paper>
  );
}

export default BookingItem;
