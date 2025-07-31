import { Box, List } from '@mui/material';
import TablesList from '../TablesList/TablesList';
import Loader from '../Loader/Loader';
import CreateButton from '../CreateButton/CreateButton';
import CreateDataTableForm from '../CreateDataTableForm/CreateDataTableForm';
import { schemaCreateTable } from '../../validationForm/createForm';
import { stylesTable } from './Tables.styles';
import { useTables } from '../../hooks/useTables';
import { useTableFilters } from '../../hooks/useTableFilters';
import FilterBySeats from './TablesFilters/FilterBySeats';
import FilterByOccupancy from './TablesFilters/FilterByOccupancy';
import FilterByLocation from './TablesFilters/FilterByLocation';
import { useSelector } from 'react-redux';
import { selectTablesIsLoading } from '../../redux/tables/tables.selectors';

const Tables = () => {
  const isLoading = useSelector(selectTablesIsLoading)
  const { dataTables, initialStateForm, onCreateTable } = useTables();
  const { filteredTables, filters, handleFilterChange } = useTableFilters(dataTables);
  const sortedIsOccupied = filteredTables?.sort((a, b) => {
    if (a.isOccupied && !b.isOccupied) return -1;
    if (!a.isOccupied && b.isOccupied) return 1;
    return 0;
  });

  if (isLoading) return <Loader />;

  return (
    <>
      <CreateButton onCreate={onCreateTable} initialForm={initialStateForm} validationSchema={schemaCreateTable} FormComponent={CreateDataTableForm} />
      <Box  display="flex" gap={2} mb={2} flexWrap="wrap">
        <FilterBySeats value={filters.seats} onChange={handleFilterChange} />
        <FilterByOccupancy value={filters.isOccupied} onChange={handleFilterChange} />
        <FilterByLocation value={filters.location} onChange={handleFilterChange} />
      </Box>
      <List sx={stylesTable}>{sortedIsOccupied?.map((data) => <TablesList key={data._id} dataList={data} />)}</List>
    </>
  );
};

export default Tables;
