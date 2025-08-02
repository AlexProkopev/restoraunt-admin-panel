
import useCheckRole from './useCheckRole';

function useGuestDetails(guest) {
  const { countVisit} = guest;

  const { checkRole } = useCheckRole();
  const role = checkRole();

  function makeDiscount(countVisit) {
    if (countVisit > 100) return '7%';
    if (countVisit > 50) return '5%';
    return '0%';
  }

  const getStatusGuest = () => {
    if (countVisit > 10) return 'VIP';
    if (countVisit> 5) return 'Частый гость';
    return 'Новый';
  };

  const giveColorStatus = (status) => {
    switch (status) {
      case 'VIP':
        return '#FFD700';
      case 'Частый гость':
        return '#C0C0C0';
      default:
        return '#9e9e9e';
    }
  };


   

  return {
    getStatusGuest,
    giveColorStatus,
    role,
    makeDiscount,
  };
}

export default useGuestDetails;
