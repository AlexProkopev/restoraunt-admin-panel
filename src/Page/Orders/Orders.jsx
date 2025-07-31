import { Box } from '@mui/material';
import CreateButton from '../../components/CreateButton/CreateButton';
import CreateDataForm from '../../components/CreateDataForm/CreateDataForm';
import OrdersList from '../../components/OrdersList/OrdersList';
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
