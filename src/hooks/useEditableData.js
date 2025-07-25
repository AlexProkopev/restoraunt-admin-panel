import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBookingThunk, fetchOrders, updateOrderThunk } from "../redux/orders/services";
import { Notify } from 'notiflix';

const useEditableData = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [originalItem, setOriginalItem] = useState(null);
  const dispatch = useDispatch();

  const handleEdit = (item) => {
    setSelectedItem(item);
    setOriginalItem(item);
    setOpenModal(true);
  };

  const handleChange = (key, value) => {
    setSelectedItem((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const updateData = {};
    Object.keys(selectedItem).forEach((key) => {
      if (selectedItem[key] !== originalItem[key]) {
        updateData[key] = selectedItem[key];
      }
    });
    const id = selectedItem._id || selectedItem.id;
    dispatch(updateOrderThunk({ id, updateData }));
    setOpenModal(false);

    return { id, updateData };
  };

  const handleDelete = async (order) => {
      try {
        await dispatch(deleteBookingThunk(order._id));
        dispatch(fetchOrders());
      } catch (error) {
        Notify.failure(error.message);
      }
    };

    const handleStatusChange = (id, newStatus) => {
        dispatch(updateOrderThunk({ id, updateData: { status: newStatus } }))
          .unwrap()
          .catch(() => {
            Notify.failure("Ошибка обработки");
          });
      };

       const handleDateChange = (id, newDate) => {
        dispatch(updateOrderThunk({ id, updateData: { date: newDate } }))
          .unwrap()
          .catch(() => {
            Notify.failure("Ошибка обработки даты");
          });
      };
  

  return {
    openModal,
    setOpenModal,
    selectedItem,
    setSelectedItem,
    handleEdit,
    handleChange,
    handleSubmit,
    handleDelete,
    handleStatusChange,
    handleDateChange
  };
};

export default useEditableData;
