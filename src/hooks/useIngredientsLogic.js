import useService from './useService';
import { useDispatch, useSelector } from 'react-redux';
import { selectIngredients } from '../redux/ingredinets/ingredinets.selectors';
import { addIngredientThunk } from '../redux/ingredinets/services';
import { Notify } from 'notiflix';

function useIngredientsLogic() {
  const dispatch = useDispatch();
  const ingredientsData = useSelector(selectIngredients);
  const { countTotal } = useService();
  const resultPrice = countTotal(ingredientsData);
  const initialStateForm = {
    name: '',
    stock: '',
    costPerUnit: '',
    category: '',
    unit: '',
  };

  const handleCreateIngredient = async(ingredientData) => {
    try {
      console.log(ingredientData);
     await dispatch(addIngredientThunk(ingredientData));
     Notify.success('Обновленно')
    } catch (error) {
      Notify.failure('Не удалось обновить')
    }
  }

  return { initialStateForm, resultPrice, handleCreateIngredient };
}

export default useIngredientsLogic;
