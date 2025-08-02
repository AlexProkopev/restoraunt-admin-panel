import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { fieldStyle } from '../CreateIngredientForm.style';

const UnitField = ({ value, onChange, error }) => (
  <FormControl fullWidth sx={fieldStyle} error={!!error}>
    <InputLabel>Фасовка</InputLabel>
    <Select
      value={value}
      onChange={(e) => onChange('unit', e.target.value)}
      label="Фасовка"
    >
      <MenuItem value="шт">Штука</MenuItem>
      <MenuItem value="гр">Грамм</MenuItem>
      <MenuItem value="мл">Милилитр</MenuItem>
    </Select>
  </FormControl>
);

export default UnitField;
