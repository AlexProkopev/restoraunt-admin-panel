import { FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox } from "@mui/material";
import { selectStyles } from "./Field.styles";

export const IsPlaceSelect = ({ value, onChange }) => (
 <FormControlLabel
  control={
    <Checkbox
      checked={value}
      onChange={onChange}
    />
  }
  label="Сейчас за столом"
/>
);
