function useFilteredDish(currentMenu) {
  const filterForMenuHot = (menu) =>
    menu?.filter(
      (dish) => dish.isAvailable && dish.category === 'Горячее блюдо'
    );
  const filteredMenuHot = filterForMenuHot(currentMenu);

  const filterForMenuSalads = (menu) =>
    menu?.filter((dish) => dish.isAvailable && dish.category === 'Салат');
  const filteredMenuSalads = filterForMenuSalads(currentMenu);

  const filterForMenuSoups = (menu) =>
    menu?.filter((dish) => dish.isAvailable && dish.category === 'Суп');
  const filteredMenuSoups = filterForMenuSoups(currentMenu);

  return { filteredMenuHot, filteredMenuSalads, filteredMenuSoups };
}

export default useFilteredDish;
