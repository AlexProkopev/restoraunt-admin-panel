import OrdersList from '../OrdersList/OrdersList';
import { Box } from '@mui/material';
import CreateButton from '../CreateButton/CreateButton';
import { useDispatch, useSelector} from 'react-redux';
import { addOrderThunk, fetchOrders } from '../../redux/orders/services';
import { useEffect } from 'react';
import { fetchTables } from '../../redux/tables/services';
import CreateDataForm from '../CreateDataForm/CreateDataForm';
import schema from '../../validationForm/createForm';
import { selectOrdersError } from '../../redux/orders/orders.selectors';
import Notify from 'notifyjs';


function Orders() {
  const dispatch = useDispatch();
  const isError = useSelector(selectOrdersError)
  const initialForm = {
    date: '',
    guests: '',
    name: '',
    status: 'ожидаем',
    notes: '',
    phone: '',
    table: '',
  };
  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

   useEffect(() => {
    if (isError) {
      Notify.failure(isError);
    }
  }, [isError]);

  const onCreateOrder = (newOrderData) => {
    dispatch(addOrderThunk(newOrderData));
    dispatch(fetchOrders());
  };

  const afterCreateOrder = () => {
    dispatch(fetchOrders());
  };


  return (
    <Box display="flex" flexDirection="column" gap={2} mt={1}>
      <CreateButton
        onCreate={onCreateOrder}
        initialForm={initialForm}
        validationSchema={schema}
        afterCreate={afterCreateOrder}
        FormComponent={CreateDataForm}
        title="Бронь"
        submitLabel="Создать"
      />
      <OrdersList />
    </Box>
  );
}

export default Orders;
