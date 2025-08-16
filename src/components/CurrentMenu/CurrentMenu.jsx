import { Box } from '@mui/material';
import { selectDishes } from '../../redux/dishes/dishes.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDishes } from '../../redux/dishes/services';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MenuHotDishesField from './fields/MenuHotDishesField';
import MenuSoupsField from './fields/MenuSoupsField';
import MenuSaladsField from './fields/MenuSaladsField';
import useFilteredDish from '../../hooks/useFilteredDish';

function CurrentMenu() {
  const currentMenu = useSelector(selectDishes);
  const dispatch = useDispatch();

  const { filteredMenuHot, filteredMenuSalads, filteredMenuSoups } =
    useFilteredDish(currentMenu);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  return (
    <Box>
      <MenuHotDishesField filteredMenuHot={filteredMenuHot} />
      <MenuSaladsField filteredMenuSalads={filteredMenuSalads} />
      <MenuSoupsField filteredMenuSoups={filteredMenuSoups} />
    </Box>
  );
}

export default CurrentMenu;
