import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { fetchTables } from '../redux/tables/services';
import { addOrderThunk } from '../redux/orders/services';
import { selectOrdersError } from '../redux/orders/orders.selectors';
import Notify from 'notifyjs';
import schema from '../validationForm/createForm';

export function useOrdersLogic() {
  const dispatch = useDispatch();
  const isError = useSelector(selectOrdersError);

  const initialForm = useMemo(() => ({
    date: '',
    guests: '',
    name: '',
    status: 'ожидаем',
    notes: '',
    phone: '',
    table: '',
  }), []);

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      Notify.failure(isError);
    }
  }, [isError]);

  const onCreateOrder = (data) => {
    dispatch(addOrderThunk(data));
  };

  return {
    onCreateOrder,
    initialForm,
    validationSchema: schema,
  };
}
