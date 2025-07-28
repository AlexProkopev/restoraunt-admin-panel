import { useState } from "react";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import DateCell from "./DateCell";

function EditableDateCell({ initialValue, id, onChange }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(dayjs(initialValue).format("YYYY-MM-DDTHH:mm"));

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleBlur = () => {
    setEditing(false);
    const isoString = dayjs(value).toISOString();
    onChange(id, isoString);
  };

  if (editing) {
    return (
      <TextField type="datetime-local" value={value} onChange={handleChange} onBlur={handleBlur} autoFocus size="small" />
    );
  }

  return (
    <DateCell date={dayjs(value).format("DD.MM HH:mm")} onClick={() =>  setEditing(true)} />
  );
}

export default EditableDateCell
