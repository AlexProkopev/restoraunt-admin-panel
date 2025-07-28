import { createSlice } from "@reduxjs/toolkit";
import {
  addOrderThunk,
  deleteBookingThunk,
  fetchOrderById,
  fetchOrders,
  updateOrderThunk,
} from "./services";

const initialState = {
  orders: null,
  ordersDetails: null,
  isLoading: false,
  isError: null,
};

const ordersRequest = createSlice({
  name: "ordersState",
  initialState,
  reducers: {
    addBooking(state, { payload }) {
      state.orders.unshift(payload);
    },
    deleteBooking(state, { payload }) {
      state.orders = state.orders.filter((order) => order._id !== payload);
    },
    clearState(state) {
     state.orders = null
     state.ordersDetails = null
    },
    
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.orders =  payload.slice().reverse();
      })
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchOrders.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
        
      })
      .addCase(fetchOrderById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrderById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.ordersDetails = payload;
      })
      .addCase(fetchOrderById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(updateOrderThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(updateOrderThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        const index = state.orders.findIndex(
          (order) => order._id === payload._id
        );
        if (index !== -1) {
          state.orders[index] = payload;
        }
      })
      .addCase(updateOrderThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(deleteBookingThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteBookingThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteBookingThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(addOrderThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(addOrderThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (state.orders) {
          state.orders.unshift(payload);
        } else {
          state.orders = [payload];
        }
      })
      .addCase(addOrderThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
        console.log('Ошибка при добавлении:', action);
      });
  },
});

export const ordersReducer = ordersRequest.reducer;
export const {addBooking, deleteBooking,clearState} = ordersRequest.actions