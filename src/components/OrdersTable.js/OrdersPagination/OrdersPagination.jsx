import { TablePagination } from '@mui/material';
import { orderPaginationStyle } from './OrdersPagination.styles';

const OrdersPagination = ({ table, count }) => {
  return (
    <TablePagination
      component="div"
      sx={orderPaginationStyle}
      count={count}
      page={table.getState().pagination.pageIndex}
      onPageChange={(_, page) => table.setPageIndex(page)}
      rowsPerPage={table.getState().pagination.pageSize}
      onRowsPerPageChange={(e) => table.setPageSize(Number(e.target.value))}
      rowsPerPageOptions={[3, 5, 10]}
    />
  );
};

export default OrdersPagination;
