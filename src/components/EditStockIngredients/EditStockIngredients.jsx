import { Box, Button, FormControl, Input } from '@mui/material';
import { Notify } from 'notiflix';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateIngredientThunk,
} from '../../redux/ingredinets/services';
import { inputButtonStyle, toggleButtonStyle } from './EditStockIngredients.style';



function EditStockIngredients({ children, id }) {
  const [state, setState] = useState({
    stock: '',
  });
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  const handleEditContent = (e) =>
    setState((prev) => ({ ...prev, stock: e.target.value }));

  const handleSubmit = async () => {
    if (!state.stock) {
      return Notify.failure('Поле не может быть пустым');
    }

    const resultDataUpgrade = {
      id,
      updateData: { stock: state.stock },
    };

    try {
      await dispatch(updateIngredientThunk(resultDataUpgrade));
      setState({
          stock: '',
      })
    } catch (error) {
      return error;
    }
  };

  return (
    <Box>
      <Button
        sx={{ ...toggleButtonStyle, display: isShow ? 'none' : 'inline-block' }}
        onClick={() => setIsShow(true)}
      >
        {children}
      </Button>
      <Button
        sx={{ ...toggleButtonStyle, display: !isShow ? 'none' : 'inline-block' }}
        onClick={() => setIsShow(false)}
      >
        скрыть
      </Button>
      {isShow && (
        <FormControl>
          <Input
            id="edit-stock"
            value={state.stock}
            onChange={handleEditContent}
            aria-label="Изменить кол-во"
          />
          <Button sx={inputButtonStyle} onClick={handleSubmit}>
            +
          </Button>
        </FormControl>
      )}
    </Box>
  );
}

export default EditStockIngredients;
