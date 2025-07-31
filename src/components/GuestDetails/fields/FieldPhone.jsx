import { FormControl, InputLabel, Input } from '@mui/material';
import { formControlStyle } from '../GuestDetails.styles';

function FieldPhone({ value, onChange }) {
  return (
    <FormControl {...formControlStyle}>
      <InputLabel htmlFor="phone">Телефон</InputLabel>
      <Input id="phone" name="phone" type="tel" value={value} onChange={onChange} />
    </FormControl>
  );
}

export default FieldPhone;
