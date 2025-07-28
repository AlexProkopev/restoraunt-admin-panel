import { List, Typography } from "@mui/material";
import BookingItem from "../BookingItem/BookingItem";
import { listTableBooking, textEmptyArray } from "./BookingList.styles";

function BookingList({ bookings }) {
  if (bookings.length === 0) return <Typography sx={textEmptyArray}>Нет брони на выбранную дату</Typography>
  return <List sx={listTableBooking}>{bookings.map((booking) => <BookingItem key={booking._id} booking={booking}/>)}</List>
}

export default BookingList;
