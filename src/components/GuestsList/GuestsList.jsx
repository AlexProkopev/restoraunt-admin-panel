import { Button, List, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectGuests } from '../../redux/guests/guests.selectors';
import { fetchGuests} from '../../redux/guests/services';
import GuestItem from '../GuestItem/GuestItem';
import UniversalModal from '../UniversalModal/UniversalModal';
import GuestDetails from '../GuestDetails/GuestDetails';
import useFilteredGuests from '../../hooks/useFilteredGuest';
import GuestFilterBar from '../GuestFilterBar/GuestFilterBar';

import useEditableData from '../../hooks/useEditableData';
import { listGuestStyle } from './GuestsList.styles';
import GuestFilterToggle from './GuestFilterToggle/GuestFilterToggle';

function GuestsList() {
  const dataGuests = useSelector(selectGuests);
  const { filteredGuests, filter, setFilter } = useFilteredGuests(dataGuests);
  const { openModal, setOpenModal, selectedItem, handleEdit, handleChange, handleSubmitGuest } = useEditableData();
  const makeKeyId = (guest) => guest._id || guest.id || guest.phone || Math.random();


  return (
    <>
     <GuestFilterToggle filter={filter} setFilter={setFilter} />

      <List sx={listGuestStyle}> {filteredGuests?.map((guest) => <GuestItem key={makeKeyId(guest)} data={guest} onClick={() => handleEdit(guest)} />)} </List>

      <UniversalModal open={openModal} guest={selectedItem} onClose={() => setOpenModal(false)} title={'Информация по гостю'}  onSubmit={handleSubmitGuest} >
          <GuestDetails guest={selectedItem} handleChange={handleChange} />
      </UniversalModal>
    </>
  );
}
export default GuestsList;
