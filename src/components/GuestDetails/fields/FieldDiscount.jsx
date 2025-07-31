import { FormControl, InputLabel, Input, Tooltip } from '@mui/material';
import { formControlStyle } from '../GuestDetails.styles';

function FieldDiscount({ value, onChange, disabled }) {
  return (
    <Tooltip title="Скидка предоставляется в зависимости от количества посещений и может быть изменена только владельцем .">
      <FormControl {...formControlStyle}>
        <InputLabel shrink htmlFor="discount">Скидка</InputLabel>
        <Input
          id="discount"
          name="discount"
          type="text"
          value={`${value}`}
          onChange={onChange}
          disabled={disabled}
        />
      </FormControl>
    </Tooltip>
  );
}

export default FieldDiscount;
