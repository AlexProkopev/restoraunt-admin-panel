import { List } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectGuests } from '../../redux/guests/guests.selectors';
import { fetchGuests } from '../../redux/guests/services';
import GuestItem from '../GuestItem/GuestItem';
import UniversalModal from '../UniversalModal/UniversalModal';
import GuestDetails from '../GuestDetails/GuestDetails';
import useFilteredGuests from '../../hooks/useFilteredGuest';
import GuestFilterBar from '../GuestFilterBar/GuestFilterBar';
import useGuestsLogic from '../../hooks/useGuestsLogic';

function GuestsList() {
  const dataGuests = useSelector(selectGuests);
  const dispatch = useDispatch();

  const { filteredGuests, filter, setFilter } = useFilteredGuests(dataGuests)
const { handleOpenModal, handleCloseModal, open, selectedGuest } = useGuestsLogic();



 
  useEffect(() => {
    dispatch(fetchGuests());
  }, [dispatch]);

  return (
    <>
    <GuestFilterBar filter={filter} setFilter={setFilter} />

      <List sx={{ p: 0, display:'flex', flexWrap:'wrap', gap: 2 }}>{filteredGuests?.map((guest) => (
          <GuestItem key={guest._id} data={guest} onClick={() => handleOpenModal(guest)} />))}
      </List>

      <UniversalModal open={open} guest={selectedGuest} onClose={handleCloseModal} title={'Информация по гостю'} onSubmit={handleCloseModal}>
        {selectedGuest && <GuestDetails guest={selectedGuest} />}
      </UniversalModal>
    </>
  );
}

export default GuestsList;
