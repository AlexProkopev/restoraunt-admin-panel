import { Box, Card, CardContent, ListItem, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NameField from './fields/NameField';
import UnitField from './fields/UnitField';
import CostField from './fields/CostField';
import StockField from './fields/StockField';
import { card, listItem } from './IngredientCard.styles';
import DeleteButton from '../DeleteButton/DeleteButton';
import { deleteIngredientThunk, fetchIngredients } from '../../redux/ingredinets/services';
import useHandller from '../../hooks/useHandller';


function IngredientCard({ ingredient }) {
  const {handleDelete} = useHandller();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  
  return (
    <ListItem disableGutters sx={listItem(isMobile)}>
      <Card variant="outlined" sx={card(isMobile, isTablet, theme)}>
        <CardContent >
          <NameField name={ingredient.name} isMobile={isMobile} theme={theme} />
          <CostField costPerUnit={ingredient.costPerUnit} unit={ingredient.unit} theme={theme} />
          <UnitField ingredient={ingredient} theme={theme} />
          <StockField stock={ingredient.stock} unit={ingredient.unit} theme={theme} />
        </CardContent>
       <Box margin={'0 auto'}> <DeleteButton onDelete={handleDelete}deleteFetch={deleteIngredientThunk} fetchData={fetchIngredients} objectId={ingredient._id}  /></Box>
      </Card>
    </ListItem>
  );
}

export default IngredientCard;
