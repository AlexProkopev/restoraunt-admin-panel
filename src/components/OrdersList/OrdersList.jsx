import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/orders/services";
import { selectOrders,selectOrdersIsLoading } from "../../redux/orders/orders.selectors";
import OrdersTable from "../OrdersTable.js/OrdersTable";
import UniversalModal from "../UniversalModal/UniversalModal";
import { Box, TextField } from "@mui/material";
import useEditableData from "../../hooks/useEditableData";
import Loader from "../Loader/Loader";


function OrdersList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectOrdersIsLoading)
  const ordersData = useSelector(selectOrders);
  const {
    openModal,
    selectedItem,
    setOpenModal,
    handleEdit,
    handleChange,
    handleSubmit,
    handleDelete,
    handleStatusChange,
    handleDateChange,
  } = useEditableData();

   useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

   if (isLoading) {
    return <Loader />
  }
  
  return (
    ordersData !== null && (
      <>
        <OrdersTable
          data={ordersData}
          onEdit={handleEdit}
          onDelete={handleDelete}
          handleStatusChange={handleStatusChange}
          handleDateChange={handleDateChange}
        />

        <UniversalModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          title="Редактирование брони"
          onSubmit={handleSubmit}
        >
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
        </UniversalModal>
      </>
    )
  );
}

export default OrdersList;
