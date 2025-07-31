import { FormControl, InputLabel, Input, Tooltip } from '@mui/material';
import { formControlStyle } from '../GuestDetails.styles';

function FieldCountVisit({ value, onChange }) {
  return (
    <Tooltip title="Количество посещений учитываеться только если гость был пришел и был за столом.">
      <FormControl {...formControlStyle}>
        <InputLabel htmlFor="countVisit">Количество посещений</InputLabel>
        <Input id="countVisit" name="countVisit" type="number" value={value} onChange={onChange} />
      </FormControl>
    </Tooltip>
  );
}

export default FieldCountVisit;
