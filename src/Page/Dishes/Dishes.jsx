import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Collapse,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDishes } from '../../redux/dishes/services';
import { selectDishes } from '../../redux/dishes/dishes.selectors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DishesList from '../../components/DishesList/DishesList';

const defaultImage = 'https://chef.ru/wp-content/uploads/2024/09/zelenye-tomaty-kolrabi-kryzhovnik.jpg';

function Dishes() {
  const dispatch = useDispatch();
  const dishes = useSelector(selectDishes);
  const [expandedId, setExpandedId] = useState(null);
  console.log(dishes);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  const handleToggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <Box sx={{ p: 2 }}>
      <DishesList />
    </Box>
  );
}

export default Dishes;
