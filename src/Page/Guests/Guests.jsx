import { Box } from '@mui/material';
import GuestsList from '../../components/GuestsList/GuestsList';
import CreateButton from '../../components/CreateButton/CreateButton';
import { schemaCreateGuest } from '../../validationForm/createForm';
import CreateGuestForm from '../../components/CreateGuestForm/CreateGuestForm';
import useGuestsLogic from '../../hooks/useGuestsLogic';

function Guests() {
  const { handleCreateGuest,initialStateForm } = useGuestsLogic();

  return (
    <Box>
      <CreateButton onCreate={handleCreateGuest} initialForm={initialStateForm} validationSchema={schemaCreateGuest} FormComponent={CreateGuestForm} />
      <GuestsList />
    </Box>
  );
}

export default Guests;
