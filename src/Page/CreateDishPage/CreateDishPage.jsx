import { Box, Button, Typography } from '@mui/material';
import { schemaCreateDish } from '../../validationForm/createForm';
import CreateDishForm from '../../components/CreateDishForm/CreateDishForm';
import { useCreateModalForm } from '../../hooks/useCreateModal';
import IngredientsSelector from '../../components/IngredientsSelector/IngredientsSelector';
import useDishesLogic from '../../hooks/useDishesLogic';

function CreateDishPage() {
  const { initialStateForm, onCreateDish } = useDishesLogic();
  const { form, errors, handleChange, handleSubmit } = useCreateModalForm({
    initialForm: initialStateForm,
    validationSchema: schemaCreateDish,
    onCreate: onCreateDish,
  });

  return (
    <Box>
      <Typography variant="h4" gutterBottom> Создание нового блюда </Typography>
      <CreateDishForm form={form} handleChange={handleChange} errors={errors} />
      <IngredientsSelector form={form} handleChange={handleChange}  error={errors.ingredients} />

      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}> Создать блюдо </Button>
    </Box>
  );
}

export default CreateDishPage;
