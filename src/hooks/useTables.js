import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTables, selectTablesIsLoading } from '../redux/tables/tables.selectors';
import { addTablesThunk, fetchTables } from '../redux/tables/services';


export const useTables = () => {
  const dispatch = useDispatch();
  const dataTables = useSelector(selectTables);
  const isLoading = useSelector(selectTablesIsLoading);

  const [open, setOpen] = useState(false);

  const initialStateForm = {
    isOccupied: false,
    location: 'Зал',
    number: 0,
    seats: 2,
  };

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  const onCreateTable = (newTableData) => {
    dispatch(addTablesThunk(newTableData));
    dispatch(fetchTables());
  };

  return {
    isLoading,
    dataTables,
    open,
    setOpen,
    initialStateForm,
    onCreateTable,
  };
};
