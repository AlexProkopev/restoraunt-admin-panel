export const selectIsLoading = (state) => state.authStore.isLoading;
export const selectIsAutorization = (state) => state.authStore.authentifitacion;
export const selectIsRefreshing = (state) => state.authStore.isRefreshing;
export const selectIsError = (state) => state.authStore.isError;
export const selectUserData = (state) => state.authStore.userData;
export const selectToken = (state) => state.authStore.token;
export const selectRole = (state) => state.authStore.role;