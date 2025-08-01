

export const selectIngredients = store => store.ingredientsStore.ingredients;
export const selectIngredientsDetails = store => store.ingredientsStore.ingredientDetails;
export const selectIngredientsIsLoading = store => store.ingredientsStore.isLoading;
export const selectIngredientsError = store => store.ingredientsStore.isError;