import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ru } from 'date-fns/locale';

const DateTimeField = ({ value, onChange, error }) => (
  <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
    <DateTimePicker
      label="Дата и время"
      value={value ? new Date(value) : null}
      onChange={newValue => onChange('date', newValue)}
      slotProps={{textField: { error: !!error, helperText: error, fullWidth: true }}}
      disablePast
    />
  </LocalizationProvider>
);

export default DateTimeField;
