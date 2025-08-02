import { Box, Button } from '@mui/material';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function Dishes() {

  

  return (
     <Box>
      <NavLink to="create">Создать новое блюдо</NavLink> 
      <Outlet />
    </Box>
  );
}

export default Dishes;
