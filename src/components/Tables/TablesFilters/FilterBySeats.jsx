import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const FilterBySeats = ({ value, onChange }) => (
  <FormControl size="small" sx={{ minWidth: 120 }}>
    <InputLabel>Места</InputLabel>
    <Select name="seats" value={value} label="Места" onChange={onChange}>
      <MenuItem value="">Все</MenuItem>
      <MenuItem value="2">2</MenuItem>
      <MenuItem value="3">3</MenuItem>
      <MenuItem value="4">4</MenuItem>
      <MenuItem value="6">6</MenuItem>
    </Select>
  </FormControl>
);

export default FilterBySeats;
