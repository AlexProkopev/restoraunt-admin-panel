
import { Box, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Input } from '@mui/material';
import { fieldBox, stockCheckbox } from '../FilterIngredients.styles';


export function CategorySelect({ value, onChange }) {
  return (
    <Box sx={fieldBox}>
      <FormControl fullWidth>
        <InputLabel>Категория</InputLabel>
        <Select value={value} onChange={onChange} label="Категория">
          <MenuItem value="all">Все</MenuItem>
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
    </Box>
  );
}

export function StockCheckbox({ checked, onChange }) {
  return (
    <Box sx={stockCheckbox}>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={onChange} />}
        label="Скоро закончатся"
      />
    </Box>
  );
}

export function NameSearch({ value, onChange }) {
  return (
    <Box sx={fieldBox}>
      <FormControl fullWidth variant="standard">
        <InputLabel htmlFor="name-search">Поиск по названию</InputLabel>
        <Input
          id="name-search"
          value={value}
          onChange={onChange}
          aria-label="Поиск по названию"
          fullWidth
        />
      </FormControl>
    </Box>
  );
}
