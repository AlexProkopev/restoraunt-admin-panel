import { Box,} from '@mui/material';
import NameField from './fields/NameField';
import CategoryField from './fields/CategoryField';
import AvailabilityField from './fields/AvailabilityField';
import MarkupField from './fields/MarkupField';
import PhotoUploadFields from './fields/PhotoUploadFields';


function CreateDishForm({ form, handleChange, errors, setForm }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleChange('photo', file); 
    }
  };
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
      
     
      <PhotoUploadFields form={form} errors={errors} handleFileChange={handleFileChange} setForm={setForm}/>
    </Box>
  );
}

export default CreateDishForm;
