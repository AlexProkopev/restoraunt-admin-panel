import { Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import DeleteButton from '../../DeleteButton/DeleteButton';
import { deleteDishThunk, fetchDishes } from '../../../redux/dishes/services';
import { boxDishFront, imgBoxFront, title, wrapperBackdrop } from './DishFront.styles';


export default function DishFront({ dish }) {
  const { _id, name, category, photo } = dish;
  const dispatch = useDispatch();

  const handleDeleteDish = async () => {
    await dispatch(deleteDishThunk(_id));
    dispatch(fetchDishes());
  };

  return (
    <Box sx={boxDishFront}>
      <Box component="img" src={photo} alt={name} sx={imgBoxFront} />
      <Box sx={wrapperBackdrop}>
        <Typography variant="body2" sx={title}>{category}</Typography>
        <Typography variant="h6">{name}</Typography>
        <Box sx={{width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <DeleteButton onDelete={handleDeleteDish} deleteFetch={deleteDishThunk} fetchData={fetchDishes} objectId={_id} />
        </Box>
      </Box>
    </Box>
  );
}
