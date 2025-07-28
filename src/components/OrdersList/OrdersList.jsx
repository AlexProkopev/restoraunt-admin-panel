import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../redux/orders/services';
import {selectOrders,selectOrdersIsLoading } from '../../redux/orders/orders.selectors';
import { selectTables } from '../../redux/tables/tables.selectors';
import { fetchTables } from '../../redux/tables/services';
import useFilteredOrders from '../../hooks/useFilteredOrders';
import useEditableData from '../../hooks/useEditableData';
import OrdersTable from '../OrdersTable.js/OrdersTable';
import UniversalModal from '../UniversalModal/UniversalModal';
import Loader from '../Loader/Loader';
import DateFilterBar from '../DateFilterBar/DataFilterBar';
import EditOrderForm from '../EditOrderForm/EditOrderForm';

function OrdersList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectOrdersIsLoading);
  const ordersData = useSelector(selectOrders);
  const tables = useSelector(selectTables);
  const { openModal, selectedItem, setOpenModal, handleEdit, handleChange, handleSubmit, handleDelete, handleStatusChange, handleDateChange,} = useEditableData();
  const { filteredOrders, filter, setFilter } = useFilteredOrders(ordersData || []);

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchTables());
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
      <>
        <DateFilterBar filter={filter} setFilter={setFilter} tables={tables} />
        <OrdersTable data={filteredOrders} dataTable={tables} onEdit={handleEdit} onDelete={handleDelete} handleStatusChange={handleStatusChange} handleDateChange={handleDateChange}/>
        <UniversalModal open={openModal} onClose={() => setOpenModal(false)} title="Редактирование брони" onSubmit={handleSubmit} >
           <EditOrderForm selectedItem={selectedItem} handleChange={handleChange} />
        </UniversalModal>
      </>
 
  );
}

export default OrdersList;
