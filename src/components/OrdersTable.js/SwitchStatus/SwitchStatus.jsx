import { FormControlLabel, Switch } from "@mui/material";


function SwitchStatus({ row, handleStatusChange, getValue }) {
  const status = getValue();
  const isOnPlace = status === "На месте";

  return (
    <FormControlLabel
      control={
        <Switch
          size="small"
          checked={isOnPlace}
          onChange={() => {
            const newStatus = isOnPlace ? "Ожидаем" : "На месте";
            handleStatusChange(row.original._id, newStatus);
          }}
          color="primary"
        />
      }
      label={status}
      labelPlacement="bottom"
    />
  );
}

export default SwitchStatus;
