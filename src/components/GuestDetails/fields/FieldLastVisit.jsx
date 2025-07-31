import { FormControl, InputLabel, Input } from '@mui/material';
import dayjs from 'dayjs';
import { formControlStyle } from '../GuestDetails.styles';

function FieldLastVisit({ value }) {
  return (
    <FormControl {...formControlStyle}>
      <InputLabel shrink htmlFor="lastVisit">Последний визит</InputLabel>
      <Input id="lastVisit" name="lastVisit" type="text" value={dayjs(value).format('YYYY-MM-DD HH:mm')} disabled />
    </FormControl>
  );
}

export default FieldLastVisit;
