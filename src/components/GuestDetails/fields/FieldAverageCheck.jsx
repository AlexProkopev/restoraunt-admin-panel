import { FormControl, InputLabel, Input } from '@mui/material';
import { formControlStyle } from '../GuestDetails.styles';

function FieldAverageCheck() {
  return (
    <FormControl {...formControlStyle}>
      <InputLabel shrink htmlFor="averageCheck">Средний чек</InputLabel>
      <Input
        id="averageCheck"
        name="averageCheck"
        type="text"
        value="В скором времени будет доступно"
        disabled
      />
    </FormControl>
  );
}

export default FieldAverageCheck;
