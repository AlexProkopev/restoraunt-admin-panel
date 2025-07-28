import { TextField } from '@mui/material';

export const LocationField = ({ value, onChange, error }) => (
  <TextField
    label="Расположение"
    value={value}
    onChange={(e) => onChange('location', e.target.value)}
    error={!!error}
    helperText={error || ''}
  />
);

export const NumberField = ({ value, onChange, error }) => (
  <TextField
    label="Номер стола"
    value={value}
    onChange={(e) => onChange('number', e.target.value)}
    error={!!error}
    helperText={error || ''}
  />
);

export const SeatsField = ({ value, onChange, error }) => (
  <TextField
    label="Вместимость"
    type="number"
    value={value}
    onChange={(e) => onChange('seats', e.target.value)}
    error={!!error}
    helperText={error || ''}
  />
);
