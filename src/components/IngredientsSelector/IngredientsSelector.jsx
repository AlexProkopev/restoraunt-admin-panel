import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  Input,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';
import { selectIngredients } from '../../redux/ingredinets/ingredinets.selectors';

function IngredientsSelector({ form, handleChange, error }) {
  const ingredients = useSelector(selectIngredients);

  const grouped = ingredients?.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleToggleIngredient = (id) => {
  const current = form.ingredients || [];
  const exists = current.find((item) => item.ingredient === id);

  const updated = exists
    ? current.filter((item) => item.ingredient !== id)
    : [...current, { ingredient: id, quantity: 0 }];

  handleChange('ingredients', updated);
};

const handleQuantityChange = (id, quantity) => {
  const numQuantity = Number(quantity);
  const updated = (form.ingredients || []).map((item) =>
    item.ingredient === id ? { ...item, quantity: numQuantity } : item
  );
  handleChange('ingredients', updated);
};


  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Выберите ингредиенты
      </Typography>
       {error && (
        <Typography color="error" variant="body2" sx={{ mb: 1 }}>
          {error}
        </Typography>
      )}
      {Object.entries(grouped || {}).map(([category, items]) => (
        <Accordion key={category}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{category}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {items?.map((ingredient) => {
              const current = (form.ingredients || []).find(
                (i) => i.ingredient === ingredient._id
              );
              return (
                <Box
                  key={ingredient._id}
                  sx={{ display: 'flex', flexDirection: 'column', mb: 1 }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={!!current}
                        onChange={() =>
                          handleToggleIngredient(ingredient._id)
                        }
                      />
                    }
                    label={
                      typeof ingredient.name === 'string'
                        ? ingredient.name
                        : JSON.stringify(ingredient.name)
                    }
                  />
                  {current && (
                    <Input
                      type="number"
                       inputProps={{ min: 0 }}
                      placeholder="Граммы"
                      value={current.quantity}
                      onChange={(e) =>
                        handleQuantityChange(ingredient._id, e.target.value)
                      }
                      style={{ width: '100px', marginLeft: '32px' }}
                    />
                  )}
                </Box>
              );
            })}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default IngredientsSelector;
