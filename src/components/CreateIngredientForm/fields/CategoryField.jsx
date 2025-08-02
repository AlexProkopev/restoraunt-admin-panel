import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { fieldStyle } from '../CreateIngredientForm.style';

const CategoryField = ({ value, onChange, error }) => (
  <FormControl fullWidth sx={fieldStyle} error={!!error}>
    <InputLabel>Категория</InputLabel>
    <Select
      value={value}
      onChange={(e) => onChange('category', e.target.value)}
      label="Категория"
    >
      <MenuItem value="Мясо">Мясо</MenuItem>
      <MenuItem value="Рыба и морепродукты">Рыба и морепродукты</MenuItem>
      <MenuItem value="Овощи">Овощи</MenuItem>
      <MenuItem value="Фрукты">Фрукты</MenuItem>
      <MenuItem value="Бакалея">Бакалея</MenuItem>
      <MenuItem value="Молочные продукты">Молочные продукты</MenuItem>
      <MenuItem value="Напитки">Напитки</MenuItem>
      <MenuItem value="Заморозка">Заморозка</MenuItem>
      <MenuItem value="Соусы и специи">Соусы и специи</MenuItem>
      <MenuItem value="Выпечка и десерты">Выпечка и десерты</MenuItem>
      <MenuItem value="Хлеб и мучное">Хлеб и мучное</MenuItem>
      <MenuItem value="Прочее">Прочее</MenuItem>
    </Select>
  </FormControl>
);

export default CategoryField;
