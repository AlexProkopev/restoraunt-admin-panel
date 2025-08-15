import { Box } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

import MenuNavigation from '../../components/MenuNavigation/MenuNavigation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchIngredients } from '../../redux/ingredinets/services';

function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchIngredients());
    console.log('Menu component mounted, fetching ingredients...');
    if (location.pathname === '/menu') {
      navigate('/menu/dishes', { replace: true });
    }
  }, [dispatch, location, navigate]);

  return (
    <Box sx={{ width: '100%', px: 2, py: 1 }}>
      <MenuNavigation />

      <Box sx={{ mt: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Menu;
