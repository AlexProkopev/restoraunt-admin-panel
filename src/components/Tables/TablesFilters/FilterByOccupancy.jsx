import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const FilterByOccupancy = ({ value, onChange }) => (
  <FormControl size="small" sx={{ minWidth: 140 }}>
    <InputLabel>Статус</InputLabel>
    <Select name="isOccupied" value={value} label="Статус" onChange={onChange}>
      <MenuItem value="">Все</MenuItem>
      <MenuItem value="true">Заняты</MenuItem>
      <MenuItem value="false">Свободные</MenuItem>
    </Select>
  </FormControl>
);

export default FilterByOccupancy;
