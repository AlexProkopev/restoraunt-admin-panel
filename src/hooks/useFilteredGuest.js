import { useMemo, useState } from 'react';

export default function useFilteredGuests(guests = []) {
  const [filter, setFilter] = useState({
    visits: 'all',
    nameIncludes: '',
    phoneIncludes: '',
    recentVisit: false,
    nowIsPlace: false,
  });

  const filteredGuests = useMemo(() => {
    return guests?.filter((guest) => {
      const count = Number(guest.countVisit || 0);
      const name = guest.name?.toLowerCase() || '';
      const phone = guest.phone || 0;
      const lastVisit = new Date(guest.lastVisit);
      const now = new Date();

      if (filter.visits === 'before10' && count >= 10) return false;
      if (filter.visits === 'before5' && count >= 5) return false;
      if (filter.visits === 'after10' && count <= 10) return false;
      if (filter.visits === 'after5' && count <= 5) return false;
      if (filter.visits === 'firstTime' && count !== 1) return false;

      if (
        filter.nameIncludes &&
        !name.includes(filter.nameIncludes.toLowerCase())
      ) {
        return false;
      }

      if (
        filter.phoneIncludes &&
        !phone.toString().includes(filter.phoneIncludes)
      ) {
        return false;
      }

      if (filter.recentVisit) {
        const diff = (now - lastVisit) / (1000 * 60 * 60 * 24);
        if (diff > 30) return false;
      }

      if (filter.nowIsPlace && !guest.nowIsPlace) return false;

      return true;
    });
  }, [guests, filter]);

  return { filteredGuests, filter, setFilter };
}
