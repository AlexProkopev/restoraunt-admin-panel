import { TextField } from '@mui/material';

const GuestsField = ({ value, onChange, error }) => (
  <TextField
    label="Гостей"
    type="number"
    value={value}
    onChange={e => onChange('guests', e.target.value)}
    error={!!error}
    helperText={error}
    fullWidth
  />
);

export default GuestsField;
