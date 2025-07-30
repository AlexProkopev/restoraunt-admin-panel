export const selectGuests = store => store.guestsStore.guests;
export const selectGuestsDetails = store => store.guestsStore.guestDetails;
export const selectGuestsIsLoading = store => store.guestsStore.isLoading;
export const selectGuestsError = state => state.guestsStore.isError;