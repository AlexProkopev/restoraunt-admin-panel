import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const fieldStyle = { marginBottom: '16px' };

export default function CategoryField({ value, onChange, error }) {
  return (
    <FormControl fullWidth error={error} sx={fieldStyle}>
      <InputLabel>Категория</InputLabel>
      <Select
        value={value}
        onChange={e => onChange(e.target.value)}
        label="Категория"
      >
        <MenuItem value="Салат">Салат</MenuItem>
        <MenuItem value="Горячее блюдо">Горячее блюдо</MenuItem>
        <MenuItem value="Десерт">Десерт</MenuItem>
      </Select>
    </FormControl>
  );
}
