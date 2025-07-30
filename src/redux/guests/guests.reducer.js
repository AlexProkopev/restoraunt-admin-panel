import { createSlice } from "@reduxjs/toolkit";
import {
  fetchGuests,
  fetchGuestById,
  updateGuestThunk,
  deleteGuestThunk,
  addGuestThunk,
} from "./services";

const initialState = {
  guests: null,
  guestDetails: null,
  isLoading: false,
  isError: null,
};

const guestsRequest = createSlice({
  name: "guestsState",
  initialState,
  reducers: {
    addGuest(state, { payload }) {
      state.guests.unshift(payload);
    },
    deleteGuest(state, { payload }) {
      state.guests = state.guests.filter((guest) => guest._id !== payload);
    },
    clearState(state) {
     state.guests = null
     state.guestDetails = null
    },
    
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGuests.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.guests =  payload.slice().reverse();
      })
      .addCase(fetchGuests.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchGuests.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
        
      })
      .addCase(fetchGuestById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGuestById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.guestDetails = payload;
      })
      .addCase(fetchGuestById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(updateGuestThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(updateGuestThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        const index = state.guests.findIndex(
          (guest) => guest._id === payload._id
        );
        if (index !== -1) {
          state.guests[index] = payload;
        }
      })
      .addCase(updateGuestThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(deleteGuestThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteGuestThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteGuestThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(addGuestThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(addGuestThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (state.guests) {
          state.guests.unshift(payload);
        } else {
          state.guests = [payload];
        }
      })
      .addCase(addGuestThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
        console.log('Ошибка при добавлении:', action);
      });
  },
});

export const guestsReducer = guestsRequest.reducer;
export const {addGuest, deleteGuest,clearState} = guestsRequest.actions