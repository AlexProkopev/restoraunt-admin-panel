import { IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteButton from "../../DeleteButton/DeleteButton";

function OrdersAction({ row, onEdit, onDelete }) {
  const deletedObjectId = row.original
  return (
    <Stack direction="row" spacing={1}>
      <IconButton color="primary" onClick={() => onEdit(row.original)}>
        <EditIcon />
      </IconButton>
     <DeleteButton onDelete={onDelete} deletedObjectId={deletedObjectId}/>
    </Stack>
  );
}

export default OrdersAction;
