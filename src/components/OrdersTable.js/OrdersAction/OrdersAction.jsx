import { IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteButton from "../../DeleteButton/DeleteButton";

import { deleteBookingThunk, fetchOrders } from "../../../redux/orders/services";
import useHandller from "../../../hooks/useHandller";

function OrdersAction({ row, onEdit}) {
  const {handleDelete} = useHandller();
  const deletedObjectId = row.original
  console.log(deletedObjectId);
  return (
    <Stack direction="row" spacing={1}>
      <IconButton color="primary" onClick={() => onEdit(row.original)}>
        <EditIcon />
      </IconButton>
     <DeleteButton onDelete={handleDelete}deleteFetch={deleteBookingThunk} fetchData={fetchOrders} objectId={deletedObjectId._id}/>
    </Stack>
  );
}

export default OrdersAction;
