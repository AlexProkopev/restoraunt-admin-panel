import { Box } from '@mui/material';
import CreateButton from '../CreateButton/CreateButton';
import CreateDataForm from '../CreateDataForm/CreateDataForm';
import OrdersList from '../OrdersList/OrdersList';
import { useOrdersLogic } from '../../hooks/useOrdersLogic';

function Orders() {
  const { onCreateOrder, initialForm, validationSchema } = useOrdersLogic();

  return (
    <Box display="flex" flexDirection="column" gap={2} mt={1}>
      <CreateButton onCreate={onCreateOrder} initialForm={initialForm} validationSchema={validationSchema} FormComponent={CreateDataForm} title="Бронь" submitLabel="Создать" />
      <OrdersList />
    </Box>
  );
}

export default Orders;
