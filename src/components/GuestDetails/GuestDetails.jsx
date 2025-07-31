import { Box, Typography } from '@mui/material';
import useGuestDetails from '../../hooks/useGuestDetails';
import { getBoxStyle, titleStyle, getStatusStyle } from './GuestDetails.styles';
import FieldName from './fields/FieldName';
import FieldPhone from './fields/FieldPhone';
import FieldCountVisit from './fields/FieldCountVisit';
import FieldLastVisit from './fields/FieldLastVisit';
import FieldDiscount from './fields/FieldDiscount';
import FieldAverageCheck from './fields/FieldAverageCheck';


function GuestDetails({ guest, handleChange }) {
  const { name, phone, countVisit, lastVisit, discount } = guest;
  const { getStatusGuest, giveColorStatus } = useGuestDetails(guest);
  const status = getStatusGuest();
  const color = giveColorStatus(status);

  return (
    <Box sx={getBoxStyle(color)}>
      <Typography {...titleStyle}>{name}</Typography>
      <Typography {...getStatusStyle(color)}>Статус: {status}</Typography>
      <FieldName value={name} onChange={handleChange} />
      <FieldPhone value={phone} onChange={handleChange} />
      <FieldCountVisit value={countVisit} onChange={handleChange} />
      <FieldLastVisit value={lastVisit} />
      <FieldDiscount value={discount} onChange={handleChange} />
      <FieldAverageCheck />
    </Box>
  );
}


export default GuestDetails;
