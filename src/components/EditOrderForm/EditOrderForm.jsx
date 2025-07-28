import { Box, TextField } from "@mui/material";

function EditOrderForm({ selectedItem, handleChange }) {
  return (
    <Box display="flex" flexDirection="column" gap={2} mt={1}>
      <TextField
        fullWidth
        label="Комментарий"
        value={selectedItem?.notes || ""}
        onChange={(e) => handleChange("notes", e.target.value)}
      />
      <TextField
        fullWidth
        type="number"
        label="Количество гостей"
        value={selectedItem?.guests || ""}
        onChange={(e) => handleChange("guests", Number(e.target.value))}
      />
      <TextField
        fullWidth
        type="text"
        label="Имя"
        value={selectedItem?.name || ""}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <TextField
        fullWidth
        type="number"
        label="Телефон"
        value={selectedItem?.phone || ""}
        onChange={(e) => handleChange("phone", e.target.value)}
      />
    </Box>
  );
}

export default EditOrderForm;
