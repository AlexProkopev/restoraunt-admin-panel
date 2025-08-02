import { Box, TextField } from "@mui/material";

function EditIngredientsForm({ selectedItem, handleChange }) {
  return (
    <Box display="flex" flexDirection="column" gap={2} mt={1}>
      <TextField
        fullWidth
        label="Название продукта"
        value={selectedItem?.name || ""}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <TextField
        fullWidth
        type="number"
        label="Общее количество в граммах"
        value={selectedItem?.stock || ""}
        onChange={(e) => handleChange("stock", Number(e.target.value))}
      />
      
      <TextField
        fullWidth
        type="number"
        label="Цена за килограмм"
        value={selectedItem?.costPerUnit || ""}
        onChange={(e) => handleChange("costPerUnit", e.target.value)}
      />
    </Box>
  );
}

export default EditIngredientsForm;
