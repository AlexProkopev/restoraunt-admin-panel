import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIngredients } from '../../redux/ingredinets/ingredinets.selectors';
import IngredientsList from '../../components/IngredientsList/IngredientsList';
import CreateButton from '../../components/CreateButton/CreateButton';
import { schemaCreateIngredient } from '../../validationForm/createForm';
import CreateIngredientForm from '../../components/CreateIngredientForm/CreateIngredientForm';
import useFilteredIngredients from '../../hooks/useFilteredIngredients';
import FilterIngredients from '../../components/FilterIngredients/FilterIngredients';
import useIngredientsLogic from '../../hooks/useIngredientsLogic';

function Ingredients() {
  const ingredientsData = useSelector(selectIngredients);
  const { filteredIngredients, filter, setFilter } = useFilteredIngredients(ingredientsData || []);
  const {initialStateForm, resultPrice, handleCreateIngredient} = useIngredientsLogic()

  return (
    <Box>
      <Box>
        <Typography variant="h4" gutterBottom>Ингредиенты</Typography>
        <Typography variant="p" gutterBottom> На общую сумму: {resultPrice} UAH </Typography>
      </Box>
      <FilterIngredients filter={filter} setFilter={setFilter}/>
      <CreateButton onCreate={handleCreateIngredient} initialForm={initialStateForm} validationSchema={schemaCreateIngredient} FormComponent={CreateIngredientForm} />
      <IngredientsList dataIngredients={filteredIngredients} />
    </Box>
  );
}

export default Ingredients;

