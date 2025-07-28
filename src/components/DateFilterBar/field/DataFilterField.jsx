import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const DateSelect = ({ value, onChange }) => (
  <FormControl sx={{ minWidth: 120 }}>
    <InputLabel>Дата</InputLabel>
    <Select value={value} onChange={onChange} label="Дата">
      <MenuItem value="all">Все</MenuItem>
      <MenuItem value="today">Сегодня</MenuItem>
      <MenuItem value="tomorrow">Завтра</MenuItem>
      <MenuItem value="week">На неделе</MenuItem>
    </Select>
  </FormControl>
);

export const StatusSelect = ({ value, onChange }) => (
  <FormControl sx={{ minWidth: 140 }}>
    <InputLabel>Статус</InputLabel>
    <Select value={value} onChange={onChange} label="Статус">
      <MenuItem value="all">Все</MenuItem>
      <MenuItem value="Ожидаем">Ожидаем</MenuItem>
      <MenuItem value="На месте">На месте</MenuItem>
    </Select>
  </FormControl>
);

export const TableSelect = ({ value, onChange, tables }) => (
  <FormControl sx={{ minWidth: 140 }}>
    <InputLabel>Стол</InputLabel>
    <Select value={value || ""} onChange={onChange} label="Стол">
      <MenuItem value="">Все</MenuItem>
      {tables?.map((table) => (
        <MenuItem key={table._id} value={table._id}>
          {table.number || table._id}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
