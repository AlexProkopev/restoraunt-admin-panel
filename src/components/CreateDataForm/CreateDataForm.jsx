import { useEffect } from 'react';
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ru } from 'date-fns/locale';
import { useDispatch, useSelector } from 'react-redux';
import { selectTables } from '../../redux/tables/tables.selectors';
import { fetchTables } from '../../redux/tables/services';

const CreateDataForm = ({ form, handleChange, errors }) => {
  const tableData = useSelector(selectTables);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  const tableFilterData = tableData
    ?.filter((table) => !table.isOccupied)
    .map((table) => ({
      label: `Стол №${table.number} (${table.seats} места)`,
      value: table._id,
    }));

  return (
    <Box display="flex" flexDirection="column" gap={2} mt={1}>
      <TextField
        label="Имя"
        value={form.name}
        onChange={(e) => handleChange('name', e.target.value)}
        error={!!errors?.name}
        helperText={errors?.name}
      />
      <TextField
        label="Телефон"
        value={form.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
        error={!!errors?.phone}
        helperText={errors?.phone}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
        <DateTimePicker
          label="Дата и время"
          value={form.date ? new Date(form.date) : null}
          onChange={(newValue) => handleChange('date', newValue)}
          slotProps={{
            textField: { error: !!errors?.date, helperText: errors?.date },
          }}
          disablePast
        />
      </LocalizationProvider>
      <TextField
        label="Гостей"
        type="number"
        value={form.guests}
        onChange={(e) => handleChange('guests', e.target.value)}
        error={!!errors?.guests}
        helperText={errors?.guests}
      />
      <FormControl fullWidth error={!!errors?.table}>
        <InputLabel id="table-select-label">Стол</InputLabel>
        <Select
          labelId="table-select-label"
          value={form.table || ''}
          label="Стол"
          onChange={(e) => handleChange('table', e.target.value)}
        >
          {tableFilterData?.length > 0 ? (
            tableFilterData.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="">Все столы заняты</MenuItem>
          )}
        </Select>
        {errors?.table && (
          <p style={{ color: '#d32f2f', fontSize: '0.75rem', marginTop: 3 }}>
            {errors.table}
          </p>
        )}
      </FormControl>
      <TextField
        label="Заметки"
        value={form.notes}
        onChange={(e) => handleChange('notes', e.target.value)}
        error={!!errors?.notes}
        helperText={errors?.notes}
      />
    </Box>
  );
};

export default CreateDataForm;
