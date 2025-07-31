import { FormControlLabel, Checkbox } from "@mui/material";

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
