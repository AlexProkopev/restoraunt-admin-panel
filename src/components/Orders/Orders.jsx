
import OrdersList from "../OrdersList/OrdersList";
import { Box } from "@mui/material";
import CreateButton from "../CreateButton/CreateButton";
import { useDispatch } from "react-redux";
import { addOrderThunk, fetchOrders } from "../../redux/orders/services";

function Orders() {
  const dispatch = useDispatch();
  const initialForm = {
    date: "",
    guests: "",
    name: "",
    status: "ожидаем",
    notes: "",
    phone: "",
    table: "",
  };

  const onCreateOrder = (newOrderData) => {
    dispatch(addOrderThunk(newOrderData));
    dispatch(fetchOrders());
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} mt={1}>
      <CreateButton
        onCreate={(order) => onCreateOrder(order)}
        initialForm={initialForm}
        content={"Создать бронь"}
      />
      <OrdersList />
    </Box>
  );
}

export default Orders;
