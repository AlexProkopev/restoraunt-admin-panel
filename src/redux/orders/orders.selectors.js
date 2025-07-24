export const selectOrders = store => store.ordersStore.orders;
export const selectOrdersDetails = store => store.ordersStore.ordersDetails;
export const selectOrdersIsLoading = store => store.ordersStore.isLoading;
export const selectOrdersError = (state) => state.ordersStore.isError;