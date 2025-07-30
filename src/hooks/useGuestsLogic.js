import { useDispatch } from 'react-redux';
import { addGuestThunk, deleteGuestThunk, fetchGuests } from '../redux/guests/services';
import Notify from 'notifyjs';
import { fetchTables } from '../redux/tables/services';
import { useEffect, useState } from 'react';

function useGuestsLogic() {
  const dispatch = useDispatch();
   const [open, setOpen] = useState(false);
    const [selectedGuest, setSelectedGuest] = useState(null);
  const initialStateForm = {
    name: '',
    phone: '',
  };


   const handleOpenModal = (guest) => {
      setSelectedGuest(guest);
      setOpen(true);
    };
  
    const handleCloseModal = () => {
      setOpen(false);
      setSelectedGuest(null);
    };
  
   
    useEffect(() => {
      dispatch(fetchGuests());
    }, [dispatch]);


  
    const handleCreateGuest = (guestData) => {
      dispatch(addGuestThunk(guestData));
      dispatch(fetchTables());
    };

  const handleDeleteGuest = async (guestId) => {
    try {
      await dispatch(deleteGuestThunk(guestId));
      dispatch(fetchGuests());
    } catch (error) {
      Notify.failure(error.message);
    }
  };

  return { handleDeleteGuest, handleCreateGuest, handleOpenModal, handleCloseModal, initialStateForm,open,selectedGuest };
}

export default useGuestsLogic;
