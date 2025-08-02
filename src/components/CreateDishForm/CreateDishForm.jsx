import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';


function CreateDishForm({ form, handleChange, errors }) {
    console.log(errors);
  return (
   <Box>
    <TextField
  label="Название"
  value={form.name}
  onChange={e => handleChange('name', e.target.value)}
  error={!!errors.name}
  helperText={errors.name}
  fullWidth
/>

<FormControl fullWidth error={!!errors.category}>
  <InputLabel>Категория</InputLabel>
  <Select
    value={form.category}
    onChange={(e) => handleChange('category', e.target.value)}
    label="Категория"
  >
    <MenuItem value="Салат">Салат</MenuItem>
    <MenuItem value="Горячее блюдо">Горячее блюдо</MenuItem>
    <MenuItem value="Десерт">Десерт</MenuItem>
  </Select>
</FormControl>

<FormControl fullWidth error={!!errors.isAvailable}>
  <InputLabel>Включать в меню</InputLabel>
  <Select
    value={form.isAvailable}
    onChange={(e) => handleChange('isAvailable', e.target.value)}
    label="Состав меню"
  >
    <MenuItem value={true}>Да</MenuItem>
    <MenuItem value={false}>Нет</MenuItem>
  </Select>
</FormControl>

<TextField
  label="Процент наценки"
  value={form.percent}
  onChange={e => handleChange('percent', e.target.value)}
  error={!!errors.percent}
  helperText={errors.percent}
  fullWidth
/>

   </Box>
    );
  
}

export default CreateDishForm