import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  TablePagination,
  Paper,
  Box,
} from '@mui/material';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { getColumns } from './config';
import { useSelector } from 'react-redux';
import { selectTables } from '../../redux/tables/tables.selectors';
import ErrorsComponent from '../ErrorsComponent/ErrorsComponent';


const OrdersTable = ({
  data,
  onEdit,
  onDelete,
  handleStatusChange,
  handleDateChange,
}) => {
  const tables = useSelector(selectTables);
  const columns = getColumns(
    onEdit,
    onDelete,
    handleStatusChange,
    handleDateChange,
    tables
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  if (data.length === 0) {
    return <ErrorsComponent>Ни одной брони не найдено</ErrorsComponent>;
  }
  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer component={Box} sx={{ overflowX: 'auto' }}>
        <Table sx={{ overflowX: 'hidden' }}>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          sx={{
            width: { xs: '310px', sm: '100%' },
            '& .MuiTablePagination-toolbar': {
              flexDirection: { xs: 'flex', sm: 'row' },
              flexWrap: { xs: 'wrap' },
              alignItems: { xs: 'center', sm: 'center' },
              gap: 1,
            },
            '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows':
              {
                fontSize: { xs: '12px', sm: '14px' },
              },
            '& .MuiTablePagination-actions': {
              marginLeft: { xs: 0, sm: 2 },
            },
          }}
          count={data.length}
          page={table.getState().pagination.pageIndex}
          onPageChange={(_, page) => table.setPageIndex(page)}
          rowsPerPage={table.getState().pagination.pageSize}
          onRowsPerPageChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          rowsPerPageOptions={[3, 5, 10]}
        />
      </TableContainer>
    </Paper>
  );
};

export default OrdersTable;
