import Notify from 'notifyjs';

import { useDispatch } from 'react-redux';

function useHandller() {
  const dispatch = useDispatch();

  const handleDelete = async (deleteFetch, fetchData, objcetId) => {
    try {
      await dispatch(deleteFetch(objcetId));
      dispatch(fetchData());
    } catch (error) {
      Notify.failure(error.message);
    }
  };

  const handleCreateIngredient = (ingredientData,addThunk) => dispatch(addThunk(ingredientData));
  return { handleDelete,handleCreateIngredient };
}

export default useHandller;
