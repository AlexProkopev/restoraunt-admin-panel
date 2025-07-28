import { useMemo, useState } from 'react';

export const useTableFilters = (tables) => {
  const [filters, setFilters] = useState({
    seats: '',
    isOccupied: '',
    location: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredTables = useMemo(() => {
    return tables?.filter((table) => {
      const matchSeats = filters.seats ? table.seats === Number(filters.seats) : true;
      const matchOccupied =
        filters.isOccupied !== ''
          ? table.isOccupied === (filters.isOccupied === 'true')
          : true;
      const matchLocation = filters.location ? table.location === filters.location : true;
      return matchSeats && matchOccupied && matchLocation;
    });
  }, [tables, filters]);

  return { filteredTables, filters, handleFilterChange };
};
