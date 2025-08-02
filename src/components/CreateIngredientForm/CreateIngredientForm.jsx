import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NameField from './fields/NameField';
import StockField from './fields/StockField';
import CostField from './fields/CostField';
import CategoryField from './fields/CategoryField';
import { formBoxStyle, titleStyle } from './CreateIngredientForm.style';
import UnitField from './fields/UnitField';



function CreateIngredientForm({ form, handleChange, errors }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box component="form" noValidate autoComplete="off" sx={formBoxStyle(isMobile, theme)}>

      <Typography variant={isMobile ? 'h6' : 'h5'} sx={titleStyle}>Добавить продукт/ингредиент </Typography>

      <NameField value={form.name} onChange={handleChange} error={errors.name} />
      <StockField value={form.stock} onChange={handleChange} error={errors.stock} />
      <CostField value={form.costPerUnit} onChange={handleChange} error={errors.costPerUnit} />
      <CategoryField value={form.category} onChange={handleChange} error={errors.category} />
      <UnitField value={form.unit} onChange={handleChange} error={errors.unit} />
    </Box>
  );
}

export default CreateIngredientForm;
