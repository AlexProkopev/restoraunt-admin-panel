import { Box, Typography } from '@mui/material';

import { boxDishBack, } from './DishBack.styles';
import DishField from './fields/DishField';
import MenuToggleField from './fields/MenuToggleField';
import PriceField from './fields/PriceField';
import MarkupField from './fields/MarkupField';
import CostField from './fields/CostField';
import IngredientsField from './fields/IngredientsField';

export default function DishBack({ dish }) {
   const { name, category, price, percent, isAvailable, _id, ingredients } = dish;

  return (
    <Box sx={boxDishBack}>
        <Typography variant="h6">{name}</Typography>
        <DishField label="Категория" value={category} />
        <MenuToggleField _id={_id} isAvailable={isAvailable} />
        <PriceField price={price} />
        <MarkupField percent={percent} />
        <CostField price={price} percent={percent} />
        <IngredientsField ingredients={ingredients} />
    </Box>
  );
}
