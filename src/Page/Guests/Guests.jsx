import GuestsList from '../../components/GuestsList/GuestsList';
import CreateButton from '../../components/CreateButton/CreateButton';
import { schemaCreateGuest } from '../../validationForm/createForm';
import CreateGuestForm from '../../components/CreateGuestForm/CreateGuestForm';
import useGuestsLogic from '../../hooks/useGuestsLogic';

function Guests() {
  const { handleCreateGuest,initialStateForm } = useGuestsLogic();

  return (
    <>
      <CreateButton onCreate={handleCreateGuest} initialForm={initialStateForm} validationSchema={schemaCreateGuest} FormComponent={CreateGuestForm} />
      <GuestsList />
    </>
  );
}

export default Guests;
