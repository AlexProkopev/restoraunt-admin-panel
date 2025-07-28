import { useMemo } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { addDays, format } from "date-fns";

const styles = {
  boxFilterWrapper: { mb: 2, display: "flex", justifyContent: "center" },
  formControl: { minWidth: 160 },
};

function DateFilterSelect({ selectedDate, onChange }) {
  const today = useMemo(() => new Date(), []);
  const options = useMemo(() => {
    const arr = [{ label: "Все", value: "all" }];
    for (let i = 0; i <= 7; i++) {
      const day = addDays(today, i);
      arr.push({
        label: format(day, "dd.MM.yyyy"),
        value: format(day, "yyyy-MM-dd"),
      });
    }
    return arr;
  }, [today]);

  return (
    <Box sx={styles.boxFilterWrapper}>
      <FormControl sx={styles.formControl}>
        <InputLabel id="date-filter-label">Выберите дату</InputLabel>
        <Select
          labelId="date-filter-label"
          value={selectedDate}
          label="Выберите дату"
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default DateFilterSelect;
