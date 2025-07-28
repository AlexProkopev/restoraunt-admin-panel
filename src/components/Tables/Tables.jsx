import { Box, List } from '@mui/material';
import TablesList from '../TablesList/TablesList';
import Loader from '../Loader/Loader';
import CreateButton from '../CreateButton/CreateButton';
import CreateDataTableForm from '../CreateDataTableForm/CreateDataTableForm';
import UniversalModal from '../UniversalModal/UniversalModal';
import { schemaCreateTable } from '../../validationForm/createForm';
import { stylesTable } from './Tables.styles';
import { useTables } from '../../hooks/useTables';

const Tables = () => {
  const { isLoading, dataTables, open, setOpen, initialStateForm, onCreateTable } = useTables();

  if (isLoading) return <Loader />;

  return (
    <>
      <Box>
        <CreateButton onCreate={onCreateTable} initialForm={initialStateForm} validationSchema={schemaCreateTable} afterCreate={() => console.log('ss')} 
         FormComponent={CreateDataTableForm}/>
        <List sx={stylesTable}>{dataTables?.map((data) => <TablesList key={data.number} dataList={data} />)}</List>
      </Box>

      <UniversalModal open={open} onClose={() => setOpen(false)} title="Закрыть" onSubmit={() => setOpen(false)} submitLabel="Закрыть"/>
    </>
  );
};

export default Tables;
