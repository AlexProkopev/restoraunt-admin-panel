import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const FilterByLocation = ({ value, onChange }) => (
  <FormControl size="small" sx={{ minWidth: 140 }}>
    <InputLabel>Локация</InputLabel>
    <Select name="location" value={value} label="Локация" onChange={onChange}>
      <MenuItem value="">Все</MenuItem>
      <MenuItem value="Зал">Зал</MenuItem>
      <MenuItem value="Терасса">Терасса</MenuItem>
      <MenuItem value="Вип">Вип</MenuItem>
    </Select>
  </FormControl>
);

export default FilterByLocation;


