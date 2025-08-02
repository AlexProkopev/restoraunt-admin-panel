import { useDispatch } from 'react-redux';
import {
  addGuestThunk,
  fetchGuests,
} from '../redux/guests/services';
import { useEffect } from 'react';

function useGuestsLogic() {
  const dispatch = useDispatch();
  const initialStateForm = { name: '', phone: '' };

  useEffect(() => {
    dispatch(fetchGuests());
  }, [dispatch]);

  const handleCreateGuest = (guestData) => dispatch(addGuestThunk(guestData));

  const sortedNowIsPlace = (data) => {
    return data?.sort((a, b) => {
      if (a.nowIsPlace === b.nowIsPlace) return 0;
      return a.nowIsPlace ? -1 : 1;
    });
  };

  return {
    handleCreateGuest,
    initialStateForm,
    sortedNowIsPlace,
  };
}

export default useGuestsLogic;
