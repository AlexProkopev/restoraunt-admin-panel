import { useDispatch } from 'react-redux';
import { addGuestThunk, deleteGuestThunk, fetchGuests, updateGuestThunk, } from '../redux/guests/services';
import Notify from 'notifyjs';
import { useEffect, useState } from 'react';
import useEditableData from './useEditableData';

function useGuestsLogic() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const initialStateForm = { name: '', phone: '' };
  const { handleEdit} = useEditableData();

  const handleOpenModal = (guest) => {
    setSelectedGuest(guest);
    setOpen(true);
     handleEdit(guest);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedGuest(null);
  };

  useEffect(() => {
    dispatch(fetchGuests());
  }, [dispatch]);

  const handleCreateGuest = (guestData) => dispatch(addGuestThunk(guestData));

  const nowIsPlace =(guest) => {
    if (guest.nowIsPlace) {
      return 'rgba(0, 200, 0, 0.5)'
    }
    const updatedGuest = { ...guest, nowIsPlace: true };
    dispatch(updateGuestThunk({ id: guest._id, guestData: updatedGuest }));
    setOpen(false);
  }
  

  const handleDeleteGuest = async (guestId) => {
    try {
      await dispatch(deleteGuestThunk(guestId));
      dispatch(fetchGuests());
    } catch (error) {
      Notify.failure(error.message);
    }
  };

  const handleUpdateGuest = (guestData,id) => {
    dispatch(updateGuestThunk({ id, guestData }));
    setOpen(false);
  };

   const sortedNowIsPlace = (data) => {
    return data?.sort((a, b) => {
      if (a.nowIsPlace === b.nowIsPlace) return 0;
      return a.nowIsPlace ? -1 : 1;
    });
  };


  return {
    handleDeleteGuest,
    handleCreateGuest,
    handleOpenModal,
    handleCloseModal,
    initialStateForm,
    open,
    selectedGuest,
    handleUpdateGuest,
    nowIsPlace,
    sortedNowIsPlace
  };
}

export default useGuestsLogic;
