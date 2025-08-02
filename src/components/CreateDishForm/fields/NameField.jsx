import { TextField } from '@mui/material';

const fieldStyle = { marginBottom: '16px' };

export default function NameField({ value, onChange, error, helperText }) {
  return (
    <TextField label="Название" value={value} onChange={e => onChange(e.target.value)} error={error} helperText={helperText} fullWidth sx={fieldStyle} />
  );
}
