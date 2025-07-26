
import {
  TextField,
  Box,
} from '@mui/material';

const CreateDataTableForm = ({ form, handleChange, errors }) => {
  return (
    <Box display="flex" flexDirection="column" gap={2} mt={1}>
      <TextField
        label="Расположение"
        value={form.location}
        onChange={(e) => handleChange('location', e.target.value)}
        error={!!errors?.name}
        helperText={errors?.name}
      />
      <TextField
        label="Номер стола"
        value={form.number}
        onChange={(e) => handleChange('number', e.target.value)}
        error={!!errors?.phone}
        helperText={errors?.phone}
      />
      <TextField
        label="Вместимость"
        type="number"
        value={form.seats}
        onChange={(e) => handleChange('seats', e.target.value)}
        error={!!errors?.guests}
        helperText={errors?.guests}
      />
    </Box>
  );
};

export default CreateDataTableForm;
