import { TextField } from '@mui/material';

const NotesField = ({ value, onChange, error }) => (
  <TextField
    label="Заметки"
    value={value}
    onChange={e => onChange('notes', e.target.value)}
    error={!!error}
    helperText={error}
    fullWidth
  />
);

export default NotesField;
