import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { selectStyles } from "./Field.styles";

export const VisitsSelect = ({ value, onChange }) => (
  <FormControl sx={selectStyles}>
    <InputLabel>Визиты</InputLabel>
    <Select value={value} onChange={onChange} label="Визиты">
        <MenuItem value="all">Все</MenuItem>
      <MenuItem value="before10">До 10</MenuItem>
      <MenuItem value="before5">До 5</MenuItem>
      <MenuItem value="after10">Более 10</MenuItem>
      <MenuItem value="after5">Более 5</MenuItem>
      <MenuItem value="firstTime">Первый раз</MenuItem>
    </Select>
  </FormControl>
);
