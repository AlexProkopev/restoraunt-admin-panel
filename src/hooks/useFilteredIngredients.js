import { useMemo, useState } from 'react';

export default function useFilteredIngredients(ingredients) {
  const [filter, setFilter] = useState({
    stock: false,
    category: 'all',
    name: '',
  });

  const filteredIngredients = useMemo(() => {
    return ingredients.filter((ingredient) => {
      const matchStock = filter.stock ? ingredient.stock <= 3000 : true;

      const matchCategory =
        filter.category === 'all' || ingredient.category === filter.category;

        const matchName = 
        filter.name === "" || ingredient.name.includes(filter.name.trim())

      return matchStock && matchCategory && matchName;
    });
  }, [ingredients, filter]);

  return { filteredIngredients, filter, setFilter };
}
