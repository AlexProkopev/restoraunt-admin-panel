import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../basic_url';


export const fetchGuests = createAsyncThunk(
  'guests/fetchGuests',
  async (_, thunkApi) => {
    try {
      const response = await instance.get(`api/guests`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchGuestById = createAsyncThunk(
  'guests/fetchGuestsById',
  async (id, thunkApi) => {
    try {
      const response = await instance.get(`api/guests/${id}`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const addGuestThunk = createAsyncThunk(
  'guests/addGuests',
  async (contactData, thunkApi) => {
    try {
      const { data } = await instance.post(`/api/guests`, contactData);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const updateGuestThunk = createAsyncThunk(
  'guests/updateGuests',
  async ({ id, updateData }, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/api/guests/${id}`, updateData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteGuestThunk = createAsyncThunk(
  'guests/deleteGuests',
  async (id, thunkApi) => {
    try {
      const { data } = await instance.delete(`/api/guests/${id}`);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
