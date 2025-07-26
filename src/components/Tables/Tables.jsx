import { useDispatch, useSelector } from 'react-redux';
import {
  selectTables,
  selectTablesIsLoading,
} from '../../redux/tables/tables.selectors';
import { useEffect } from 'react';
import { addTablesThunk, fetchTables } from '../../redux/tables/services';
import { Box, List } from '@mui/material';
import TablesList from '../TablesList/TablesList';
import Loader from '../Loader/Loader';
import CreateButton from '../CreateButton/CreateButton';
import  { schemaCreateTable } from '../../validationForm/createForm';
import CreateDataTableForm from '../CreateDataTableForm/CreateDataTableForm';

function Tables() {
  const dispatch = useDispatch();
  const dataTables = useSelector(selectTables);
  const isLoading = useSelector(selectTablesIsLoading);
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


  if (isLoading) {
    return <Loader />;
  }

  return (
   <Box >
    <CreateButton
    onCreate={onCreateTable}
    initialForm={initialStateForm}
    validationSchema={schemaCreateTable}
    afterCreate={()=>console.log('ss')}
    FormComponent={CreateDataTableForm}
    />
     <List
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop:'20px',
      }}
    >
      {dataTables?.map((data) => (
        <TablesList key={data._id} dataList={data} />
      ))}
    </List>
   </Box>
  );
}

export default Tables;
