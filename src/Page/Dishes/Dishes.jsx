import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDishes } from '../../redux/dishes/services';
import { selectDishesIsLoading } from '../../redux/dishes/dishes.selectors';
import DishesList from '../../components/DishesList/DishesList';
import Loader from '../../components/Loader/Loader';

function Dishes() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectDishesIsLoading);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box sx={{ p: 2 }}>
      <DishesList />
    </Box>
  );
}

export default Dishes;
