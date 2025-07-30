import { Box } from '@mui/material';
import { LocationField, NumberField, SeatsField } from './field/AllField';
import { container } from './CreateDataTableForm.styles';

const CreateDataTableForm = ({ form, handleChange, errors }) => {
  
  return (
    <Box sx={container}>
      <LocationField value={form.location} onChange={handleChange} error={errors?.location} />
      <NumberField value={form.number} onChange={handleChange} error={errors?.number} />
      <SeatsField value={form.seats} onChange={handleChange} error={errors?.seats} />
    </Box>
  );
};

export default CreateDataTableForm;
