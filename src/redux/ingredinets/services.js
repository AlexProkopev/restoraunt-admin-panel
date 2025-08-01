import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../basic_url';


export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async (_, thunkApi) => {
    try {
      const response = await instance.get(`api/ingredients`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchIngredientById = createAsyncThunk(
  'ingredients/fetchIngredientById',
  async (id, thunkApi) => {
    try {
      const response = await instance.get(`api/ingredients/${id}`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const addIngredientThunk = createAsyncThunk(
  'ingredients/addIngredient',
  async (ingredientData, thunkApi) => {
    try {
      const { data } = await instance.post(`/api/ingredients`, ingredientData);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const updateIngredientThunk = createAsyncThunk(
  'ingredients/updateIngredient',
  async ({ id, updateData }, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/api/ingredients/${id}`, updateData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteIngredientThunk = createAsyncThunk(
  'ingredients/deleteIngredient',
  async (id, thunkApi) => {
    try {
      const { data } = await instance.delete(`/api/ingredients/${id}`);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
