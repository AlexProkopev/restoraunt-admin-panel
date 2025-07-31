import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import GuestFilterBar from '../../GuestFilterBar/GuestFilterBar';
import { buttonStyle } from '../GuestsList.styles';

function GuestFilterToggle({ filter, setFilter }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [showFilters, setShowFilters] = useState(!isSmallScreen);
   const btnContent = showFilters ? 'Скрыть фильтры' : 'Показать фильтры';

  useEffect(() => {
    if (!isSmallScreen) setShowFilters(false);
  }, [isSmallScreen]);

  return (
    <>
      <Button sx={{ ...buttonStyle, textAlign: 'start' }} onClick={() => setShowFilters(prev => !prev)}>{btnContent}</Button>
      {showFilters && <GuestFilterBar filter={filter} setFilter={setFilter} />}
    </>
  );
}

export default GuestFilterToggle;
