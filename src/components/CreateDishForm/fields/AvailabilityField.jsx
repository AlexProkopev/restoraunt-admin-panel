import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const fieldStyle = { marginBottom: '16px' };

export default function AvailabilityField({ value, onChange, error }) {
  return (
    <FormControl fullWidth error={error} sx={fieldStyle}>
      <InputLabel>Включать в меню</InputLabel>
      <Select value={value} onChange={e => onChange(e.target.value)} label="Состав меню" >
        <MenuItem value={true}>Да</MenuItem>
        <MenuItem value={false}>Нет</MenuItem>
      </Select>
    </FormControl>
  );
}
