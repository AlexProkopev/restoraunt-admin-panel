import { FormControl, FormLabel, TextField } from '@mui/material';
import { fieldStyle } from '../CreateIngredientForm.style';


const StockField = ({ value, onChange, error }) => (
  <FormControl fullWidth sx={fieldStyle}>
    <FormLabel>Количество в гр/мл/шт</FormLabel>
    <TextField
      size="small"
      variant="outlined"
      type="number"
      value={value}
      onChange={(e) => onChange('stock', e.target.value)}
      error={!!error}
      helperText={error || ''}
    />
  </FormControl>
);

export default StockField;
