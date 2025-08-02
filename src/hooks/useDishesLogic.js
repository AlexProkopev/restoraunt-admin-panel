import { useDispatch } from 'react-redux';
import { addDishThunk } from '../redux/dishes/services';
import { Notify } from 'notiflix';


function useDishesLogic() {
  const initialStateForm = {
    name: '',
    category: '',
    percent: 0,
    isAvailable: true,
    ingredients: [],
  };
  const dispatch = useDispatch();

  const onCreateDish = async (formData) => {
    try {
      await dispatch(addDishThunk(formData));
       Notify.success(`Блюдо "${formData.name}" успешно создано!`);
    } catch (error) {
      Notify.failure(`Ошибка при создании блюда "${formData.name}":`, error);
    }
  };

  return { initialStateForm, onCreateDish };
}

export default useDishesLogic;
