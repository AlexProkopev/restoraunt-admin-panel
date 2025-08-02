

export const selectDishes = store => store.dishesStore.dishes;
export const selectDishesDetails = store => store.dishesStore.dishDetails;
export const selectDishesIsLoading = store => store.dishesStore.isLoading;
export const selectDishesError = store => store.dishesStore.isError;