import useService from './useService';
import { useDispatch, useSelector } from 'react-redux';
import { selectIngredients } from '../redux/ingredinets/ingredinets.selectors';
import { addIngredientThunk } from '../redux/ingredinets/services';

function useIngredientsLogic() {
    const dispatch = useDispatch()
     const ingredientsData = useSelector(selectIngredients);
    const {countTotal} = useService()
  const resultPrice = countTotal(ingredientsData)
    const initialStateForm = {
    name: '',
    stock: '',
    costPerUnit: '',
    category: '',
  };

   const handleCreateIngredient = (ingredientData) => dispatch(addIngredientThunk(ingredientData));

  return (
    {initialStateForm, resultPrice, handleCreateIngredient}
  )
}

export default useIngredientsLogic