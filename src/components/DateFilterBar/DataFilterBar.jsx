import { Box } from "@mui/material";
import { DateSelect, StatusSelect, TableSelect } from "./field/DataFilterField";

function DateFilterBar({ filter, setFilter, tables }) {
  
  const handleDateChange = (e) =>
    setFilter((prev) => ({ ...prev, date: e.target.value }));
  const handleStatusChange = (e) =>
    setFilter((prev) => ({ ...prev, status: e.target.value }));
  const handleTableChange = (e) =>
    setFilter((prev) => ({ ...prev, table: e.target.value }));

  return (
    <Box display="flex" gap={2} mb={2} flexWrap="wrap">
      <DateSelect value={filter.date} onChange={handleDateChange} />
      <StatusSelect value={filter.status} onChange={handleStatusChange} />
      <TableSelect value={filter.table} onChange={handleTableChange} tables={tables} />
    </Box>
  );
}

export default DateFilterBar;
