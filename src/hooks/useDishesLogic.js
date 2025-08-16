import { useDispatch } from 'react-redux';
import { addDishThunk, updateDishThunk } from '../redux/dishes/services';
import { Notify } from 'notiflix';


function useDishesLogic() {
  const initialStateForm = {
    name: '',
    category: '',
    percent: 0,
    isAvailable: true,
    ingredients: [],
    photo: null
  };
  const dispatch = useDispatch();

  const handleShowInMenu = (id, isAvailable) => {
      dispatch(updateDishThunk({ id, updateData: { isAvailable: !isAvailable } }));
    };


  
  const onCreateDish = async (formData) => {
    try {
      let payload;

      if (formData.photo instanceof File) {
        const fd = new FormData();
        fd.append('name', formData.name);
        fd.append('category', formData.category);
        fd.append('percent', formData.percent);
        fd.append('isAvailable', formData.isAvailable);
        fd.append('ingredients', JSON.stringify(formData.ingredients));
        fd.append('photo', formData.photo);

        payload = fd;
      } else {
        payload = formData;
      }

      await dispatch(addDishThunk(payload));
      Notify.success(`Блюдо "${formData.name}" успешно создано!`);
    } catch (error) {
      Notify.failure(`Ошибка при создании блюда "${formData.name}": ${error.message}`);
    }
  };

  return { initialStateForm, onCreateDish, handleShowInMenu };
}

export default useDishesLogic;
