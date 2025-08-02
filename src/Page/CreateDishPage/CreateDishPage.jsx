import { Box, Button, Typography } from '@mui/material';
import { schemaCreateDish } from '../../validationForm/createForm';
import CreateDishForm from '../../components/CreateDishForm/CreateDishForm';
import { useCreateModalForm } from '../../hooks/useCreateModal';
import IngredientsSelector from '../../components/IngredientsSelector/IngredientsSelector';
import { useDispatch } from 'react-redux';

function CreateDishPage() {
  const initialStateForm = {
    name: '',
    category: '',
    percent: 0,
    isAvailable: true,
    ingredients: [],
  };
  const dispatch = useDispatch();

  const onCreate = (formData) => {
    console.log(formData);
  };
  const { form, errors, handleChange, handleSubmit } = useCreateModalForm({
    initialForm: initialStateForm,
    validationSchema: schemaCreateDish,
    onCreate,
  });
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Создание нового блюда
      </Typography>
      <CreateDishForm form={form} handleChange={handleChange} errors={errors} />
      <IngredientsSelector
        form={form}
        handleChange={handleChange}
        error={errors.ingredients}
      />

      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
        Создать блюдо
      </Button>
    </Box>
  );
}

export default CreateDishPage;
