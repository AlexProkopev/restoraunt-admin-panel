
import { Box } from "@mui/material";
import { VisitsSelect } from "./field/VisitsSelect";
import {NameFilterInput, PhoneFilterInput} from "./field/FilterInput";

function GuestFilterBar({ filter, setFilter }) {
  
  const handleVisitChange = (e) =>
    setFilter((prev) => ({ ...prev, visits: e.target.value }));
  const handleNameChange = (e) =>
    setFilter((prev) => ({ ...prev, nameIncludes: e.target.value }));
  const handlePhoneChange = (e) =>
    setFilter((prev) => ({ ...prev, phoneIncludes: e.target.value }));

  return (
    <Box display="flex" gap={2} mb={2} flexWrap="wrap">
      <VisitsSelect value={filter.visits} onChange={handleVisitChange} />
      <NameFilterInput value={filter.nameIncludes} onChange={handleNameChange} />
      <PhoneFilterInput value={filter.phoneIncludes} onChange={handlePhoneChange} />
    </Box>
  );
}

export default GuestFilterBar;
