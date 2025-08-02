import { FormControl, FormLabel, TextField } from '@mui/material';
import { fieldStyle } from '../CreateIngredientForm.style';

const CostField = ({ value, onChange, error }) => (
  <FormControl fullWidth sx={fieldStyle}>
    <FormLabel>Цена за кг/л/шт</FormLabel>
    <TextField
      size="small"
      variant="outlined"
      type="number"
      value={value}
      onChange={(e) => onChange('costPerUnit', e.target.value)}
      error={!!error}
      helperText={error || ''}
    />
  </FormControl>
);

export default CostField;
