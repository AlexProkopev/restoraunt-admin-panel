import {
  Box,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

function CreateIngredientForm({ form, handleChange, errors }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: isMobile ? 2 : 3,
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography variant={isMobile ? 'h6' : 'h5'} fontWeight="medium" mb={1}>
        Добавить ингредиент
      </Typography>

      <FormControl fullWidth>
        <FormLabel>Название</FormLabel>
        <TextField
          size="small"
          variant="outlined"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={!!errors.name}
          helperText={errors.name || ''}
        />
      </FormControl>

      <FormControl fullWidth>
        <FormLabel>Количество в граммах </FormLabel>
        <TextField
          size="small"
          variant="outlined"
          type="number"
          value={form.stock}
          onChange={(e) => handleChange('stock', e.target.value)}
          error={!!errors.stock}
          helperText={errors.stock || ''}
        />
      </FormControl>

      <FormControl fullWidth>
        <FormLabel>Цена за единицу</FormLabel>
        <TextField
          size="small"
          variant="outlined"
          type="number"
          value={form.costPerUnit}
          onChange={(e) => handleChange('costPerUnit', e.target.value)}
          error={!!errors.costPerUnit}
          helperText={errors.costPerUnit || ''}
        />
      </FormControl>

      <FormControl fullWidth>
        <FormLabel>Категория</FormLabel>
        <TextField
          size="small"
          variant="outlined"
          value={form.category}
          onChange={(e) => handleChange('category', e.target.value)}
          error={!!errors.category}
          helperText={errors.category || ''}
        />
      </FormControl>
    </Box>
  );
}

export default CreateIngredientForm;
