import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../basic_url';


export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async (_, thunkApi) => {
    try {
      const response = await instance.get(`api/bookings`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
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
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const addOrderThunk = createAsyncThunk(
  'orders/addOrders',
  async (contactData, thunkApi) => {
    try {
      const { data } = await instance.post(`/api/bookings`, contactData);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const updateOrderThunk = createAsyncThunk(
  'orders/updateOrder',
  async ({ id, updateData }, { rejectWithValue }) => {
    try {
      console.log(id, updateData);
      const response = await instance.patch(`/api/bookings/${id}`, updateData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteBookingThunk = createAsyncThunk(
  'bookings/deleteBookings',
  async (id, thunkApi) => {
    try {
      const { data } = await instance.delete(`/api/bookings/${id}`);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
