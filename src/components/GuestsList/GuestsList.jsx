import { List } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectGuests } from '../../redux/guests/guests.selectors';
import GuestItem from '../GuestItem/GuestItem';
import UniversalModal from '../UniversalModal/UniversalModal';
import GuestDetails from '../GuestDetails/GuestDetails';
import useFilteredGuests from '../../hooks/useFilteredGuest';
import useEditableData from '../../hooks/useEditableData';
import { listGuestStyle } from './GuestsList.styles';
import GuestFilterToggle from './GuestFilterToggle/GuestFilterToggle';
import useGuestsLogic from '../../hooks/useGuestsLogic';

function GuestsList() {
  const dataGuests = useSelector(selectGuests);
  const { filteredGuests, filter, setFilter } = useFilteredGuests(dataGuests);
  const { openModal, setOpenModal, selectedItem, handleEdit, handleChange, handleSubmitGuest } = useEditableData();
  const makeKeyId = (guest) => guest._id || guest.id || guest.phone || Math.random();
  const {sortedNowIsPlace} = useGuestsLogic();
  const sortedData = sortedNowIsPlace(filteredGuests);

  return (
    <>
     <GuestFilterToggle filter={filter} setFilter={setFilter} />

      <List sx={listGuestStyle}> {sortedData?.map((guest) => <GuestItem key={makeKeyId(guest)} data={guest} onClick={() => handleEdit(guest)} />)} </List>

      <UniversalModal open={openModal} guest={selectedItem} onClose={() => setOpenModal(false)} title={'Информация по гостю'}  onSubmit={handleSubmitGuest} >
          <GuestDetails guest={selectedItem} handleChange={handleChange} />
      </UniversalModal>
    </>
  );
}
export default GuestsList;
