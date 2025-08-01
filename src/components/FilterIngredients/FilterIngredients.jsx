import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { container, fieldsContainer, toggleButton } from './FilterIngredients.styles';
import { CategorySelect, NameSearch, StockCheckbox } from './fields/FilterFields';


function FilterIngredients({ filter, setFilter }) {
  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryChange = (e) => setFilter(prev => ({ ...prev, category: e.target.value }));
  const handleStockChange = (e) => setFilter(prev => ({ ...prev, stock: e.target.checked }));
  const handleNameChange = (e) => setFilter(prev => ({ ...prev, name: e.target.value }));

  return (
    <Box sx={container}>
      <Typography
        variant="subtitle1"
        sx={toggleButton}
        onClick={() => setShowFilters(!showFilters)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') setShowFilters(!showFilters); }}
      >
        {showFilters ? 'Скрыть фильтры ▲' : 'Показать фильтры ▼'}
      </Typography>

      <Box
        sx={{
          ...fieldsContainer,
          maxHeight: showFilters ? '500px' : 0,
          opacity: showFilters ? 1 : 0,
          pointerEvents: showFilters ? 'auto' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <CategorySelect value={filter.category} onChange={handleCategoryChange} />
        <StockCheckbox checked={filter.stock} onChange={handleStockChange} />
        <NameSearch value={filter.name} onChange={handleNameChange} />
      </Box>
    </Box>
  );
}

export default FilterIngredients;
