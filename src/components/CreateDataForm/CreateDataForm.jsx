import { useEffect } from 'react';
import {Box,} from '@mui/material';
import { useDispatch} from 'react-redux';
import { fetchTables } from '../../redux/tables/services';
import NameField from './fields/NameField';
import PhoneField from './fields/PhoneField';
import DateTimeField from './fields/DateTimeField';
import GuestsField from './fields/GuestsField';
import TableSelectField from './fields/TableSelectField';
import NotesField from './fields/NotesField';

const CreateDataForm = ({ form, handleChange, errors }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  return (
     <Box display="flex" flexDirection="column" gap={2} mt={1}>
        <NameField value={form.name} onChange={handleChange} error={errors.name} />
        <PhoneField value={form.phone} onChange={handleChange} error={errors.phone} />
        <DateTimeField value={form.date} onChange={handleChange} error={errors.date} />
        <GuestsField value={form.guests} onChange={handleChange} error={errors.guests} />
        <TableSelectField value={form.table} onChange={handleChange} error={errors.table} />
        <NotesField value={form.notes} onChange={handleChange} error={errors.notes} />
     </Box>
  );
};

export default CreateDataForm;

