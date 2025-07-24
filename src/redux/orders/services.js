import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../basic_url";
import Notify from "notifyjs";


export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, thunkApi) => {
    try {
      const response  = await instance.get(`api/bookings`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchOrderById = createAsyncThunk(
  'orders/fetchOrdersById',
  async (id, thunkApi) => {
    try {
      const response = await instance.get(`api/bookings/${id}`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

  export const addOrderThunk = createAsyncThunk(
    'orders/addOrders',
    async (contactData, thunkApi) => {
      
      try {
        const { data } = await instance.post(
          `/api/bookings`,
          contactData
        );
        Notify.success('Бронь создана', { timeout: 1000 });
        return data;
      } catch (err) {
        Notify.failure('Что-то пошло не так');
        return thunkApi.rejectWithValue(err.message);
      }
    }
  );

  export const updateOrderThunk = createAsyncThunk(
  "orders/updateOrder",
  async ({ id, updateData }, { rejectWithValue }) => {
    try {
        console.log( id, updateData)
      const response = await instance.patch(`/api/bookings/${id}`, updateData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteBookingThunk = createAsyncThunk(
    'bookings/deleteBookings',
    async (id, thunkApi) => {
      try {
        const { data } = await instance.delete(
          `/api/bookings/${id}`
        );
        Notify.success('Бронирование удалено');
        return data;
      } catch (err) {
        Notify.failure('Что-то пошло не так');
        return thunkApi.rejectWithValue(err.message);
      }
    }
  );