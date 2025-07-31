import { FormControl, InputLabel, Input } from '@mui/material';
import { formControlStyle } from '../GuestDetails.styles';

function FieldName({ value, onChange }) {
  return (
    <FormControl {...formControlStyle}>
      <InputLabel htmlFor="name">Имя</InputLabel>
      <Input id="name" name="name" value={value} onChange={onChange} />
    </FormControl>
  );
}

export default FieldName;
