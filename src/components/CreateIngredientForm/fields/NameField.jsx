import { FormControl, FormLabel, TextField } from '@mui/material';
import { fieldStyle } from '../CreateIngredientForm.style';

const NameField = ({ value, onChange, error }) => (
  <FormControl fullWidth sx={fieldStyle}>
    <FormLabel>Название</FormLabel>
    <TextField
      size="small"
      variant="outlined"
      value={value}
      onChange={(e) => onChange('name', e.target.value)}
      error={!!error}
      helperText={error || ''}
    />
  </FormControl>
);

export default NameField;
