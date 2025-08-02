import { Box } from '@mui/material';
import NameField from './fields/NameField';
import CategoryField from './fields/CategoryField';
import AvailabilityField from './fields/AvailabilityField';
import MarkupField from './fields/MarkupField';


function CreateDishForm({ form, handleChange, errors }) {
  return (
    <Box>
      <NameField
        value={form.name}
        onChange={value => handleChange('name', value)}
        error={!!errors.name}
        helperText={errors.name}
      />

      <CategoryField
        value={form.category}
        onChange={value => handleChange('category', value)}
        error={!!errors.category}
      />

      <AvailabilityField
        value={form.isAvailable}
        onChange={value => handleChange('isAvailable', value)}
        error={!!errors.isAvailable}
      />

      <MarkupField
        value={form.percent}
        onChange={value => handleChange('percent', value)}
        error={!!errors.percent}
        helperText={errors.percent}
      />
    </Box>
  );
}

export default CreateDishForm;
