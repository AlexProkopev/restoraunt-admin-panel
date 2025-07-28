import { TextField } from '@mui/material';

const NameField = ({ value, onChange, error }) => (
  <TextField
    label="Имя"
    value={value}
    onChange={e => onChange('name', e.target.value)}
    error={!!error}
    helperText={error}
    fullWidth
  />
);

export default NameField;