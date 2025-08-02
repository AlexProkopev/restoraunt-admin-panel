import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { container, fieldsContainer, toggleButton } from './FilterIngredients.styles';
import { CategorySelect, NameSearch, StockCheckbox } from './fields/FilterFields';


function FilterIngredients({ filter, setFilter }) {
  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryChange = (e) => setFilter(prev => ({ ...prev, category: e.target.value }));
  const handleStockChange = (e) => setFilter(prev => ({ ...prev, stock: e.target.checked }));
  const handleNameChange = (e) => setFilter(prev => ({ ...prev, name: e.target.value }));
  const handleKeyDown  = (e) => { if (e.key === 'Enter') setShowFilters(!showFilters); }

  return (
    <Box sx={container(showFilters)}>
      <Typography sx={toggleButton} onClick={() => setShowFilters(!showFilters)} role="button" tabIndex={0} onKeyDown={handleKeyDown}>
        {showFilters ? 'Скрыть фильтры ▲' : 'Показать фильтры ▼'}
      </Typography>

      <Box sx={{...fieldsContainer(showFilters)}} >
        <CategorySelect value={filter.category} onChange={handleCategoryChange} />
        <StockCheckbox checked={filter.stock} onChange={handleStockChange} />
        <NameSearch value={filter.name} onChange={handleNameChange} />
      </Box>
    </Box>
  );
}

export default FilterIngredients;


