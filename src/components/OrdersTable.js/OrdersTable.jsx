import { TableContainer, Paper, Box} from '@mui/material';
import { getCoreRowModel, useReactTable, getPaginationRowModel} from '@tanstack/react-table';
import { getColumns } from './config';
import { useMemo } from 'react';
import ErrorsComponent from '../ErrorsComponent/ErrorsComponent';
import OrdersTableContent from './OrdersTableContent/OrdersTableContent';
import OrdersPagination from './OrdersPagination/OrdersPagination';

const OrdersTable = ({data, dataTable, onEdit, onDelete, handleStatusChange, handleDateChange, }) => {

  const columns = useMemo(() => getColumns(onEdit, onDelete, handleStatusChange, handleDateChange, dataTable),
    [onEdit, onDelete, handleStatusChange, handleDateChange, dataTable]
  );
  const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel(),});

  if (data.length === 0) return <ErrorsComponent>Ни одной брони не найдено</ErrorsComponent>;
  return (
    <Paper>
      <TableContainer component={Box} sx={{ overflowX: 'auto' }}>
        <OrdersTableContent table={table} />
        <OrdersPagination table={table} count={data.length} />
      </TableContainer>
    </Paper>
  );
};

export default OrdersTable;
