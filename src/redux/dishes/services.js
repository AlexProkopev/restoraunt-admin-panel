import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../basic_url';


export const fetchDishes = createAsyncThunk(
  'dishes/fetchDishes',
  async (_, thunkApi) => {
    try {
      const response = await instance.get(`api/dishes`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchDishesById = createAsyncThunk(
  'dishes/fetchDishesById',
  async (id, thunkApi) => {
    try {
      const response = await instance.get(`api/dishes/${id}`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const addDishThunk = createAsyncThunk(
  'dishes/addDish',
  async (dishData, thunkApi) => {
    try {
      const { data } = await instance.post(`/api/dishes`, dishData);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const updateDishThunk = createAsyncThunk(
  'dishes/updateDish',
  async ({ id, updateData }, { rejectWithValue }) => {
    console.log(id, updateData);
    try {
      const response = await instance.patch(`/api/dishes/${id}`, updateData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteDishThunk = createAsyncThunk(
  'dishes/deleteDish',
  async (id, thunkApi) => {
    try {
      const { data } = await instance.delete(`/api/dishes/${id}`);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
