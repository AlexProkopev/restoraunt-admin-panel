export const selectTables = store => store.tableStore.tables;
export const selectTablesDetails = store => store.tableStore.tablesDetails;
export const selectTablesIsLoading = store => store.tableStore.isLoading;
export const selectTablesError = (state) => state.tableStore.isError;