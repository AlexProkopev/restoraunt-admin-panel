import { useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectTables } from '../../../redux/tables/tables.selectors';
import { fetchTables } from '../../../redux/tables/services';


const TableSelectField = ({ value, onChange, error }) => {
  const dispatch = useDispatch();
  const tables = useSelector(selectTables);

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  const options = tables.map(table => ({
    label: `Стол №${table.number} (${table.seats} места)`,
    value: table._id,
  }));

  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel id="table-select-label">Стол</InputLabel>
      <Select labelId="table-select-label"  value={value || ''} label="Стол" onChange={e => onChange('table', e.target.value)} >
        {options?.map(({ label, value }) => <MenuItem key={value} value={value}>{label}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

export default TableSelectField;
