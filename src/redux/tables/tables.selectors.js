export const selectTables = store => store.tablesStore.tables;
export const selectTablesDetails = store => store.tablesStore.tablesDetails;
export const selectTablesIsLoading = store => store.tablesStore.isLoading;
export const selectTablesError = (state) => state.tablesStore.isError;