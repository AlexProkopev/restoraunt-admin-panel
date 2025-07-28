import { TextField } from '@mui/material';

const PhoneField = ({ value, onChange, error }) => (
  <TextField
    label="Телефон"
    value={value}
    onChange={e => onChange('phone', e.target.value)}
    error={!!error}
    helperText={error}
    fullWidth
  />
);

export default PhoneField;
