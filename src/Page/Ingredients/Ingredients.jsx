import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIngredients } from '../../redux/ingredinets/ingredinets.selectors';
import IngredientsList from '../../components/IngredientsList/IngredientsList';
import CreateButton from '../../components/CreateButton/CreateButton';
import { schemaCreateIngredient } from '../../validationForm/createForm';
import CreateIngredientForm from '../../components/CreateIngredientForm/CreateIngredientForm';
import useFilteredIngredients from '../../hooks/useFilteredIngredients';
import FilterIngredients from '../../components/FilterIngredients/FilterIngredients';
import useIngredientsLogic from '../../hooks/useIngredientsLogic';
import usePaginatedList from '../../hooks/usePaginatedList';
import IngredientTitle from '../../components/IngredientTitle/IngredientTitle';
import ButtonIsMore from '../../components/ButtonIsMore/ButtonIsMore';

function Ingredients() {
  const ingredientsData = useSelector(selectIngredients);
  const { filteredIngredients, filter, setFilter } = useFilteredIngredients(ingredientsData || []);
  const {initialStateForm,  handleCreateIngredient} = useIngredientsLogic()
  const { setPage,visibleData,hasMore} = usePaginatedList(filteredIngredients,'stock')
  return (
    <Box>
       <IngredientTitle/>
       <FilterIngredients filter={filter} setFilter={setFilter}/>
       <CreateButton onCreate={handleCreateIngredient} initialForm={initialStateForm} validationSchema={schemaCreateIngredient} FormComponent={CreateIngredientForm} />
       <IngredientsList dataIngredients={visibleData} />
       <ButtonIsMore setPage={setPage} hasMore={hasMore}/>
    </Box>
  );
}

export default Ingredients;

