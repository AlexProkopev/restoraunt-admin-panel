import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../basic_url";
import Notify from "notifyjs";


export const fetchTables = createAsyncThunk(
  "tables/fetchTables",
  async (_, thunkApi) => {
    try {
      const response  = await instance.get(`api/table`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchTablesById = createAsyncThunk(
  'tables/fetchTablesById',
  async (id, thunkApi) => {
    try {
      const response = await instance.get(`table/${id}`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

  export const addTablesThunk = createAsyncThunk(
    'tables/addtables',
    async (contactData, thunkApi) => {
      try {
        const { data } = await instance.post(
          `/api/table`,
          contactData
        );
     
        return data;
      } catch (err) {
        Notify.failure('Что-то пошло не так');
        return thunkApi.rejectWithValue(err.message);
      }
    }
  );

 

export const deleteTablesThunk = createAsyncThunk(
    'tables/deleteTables',
    async (id, thunkApi) => {
      try {
        const { data } = await instance.delete(
          `/api/table/${id}`
        );
        
        return data;
      } catch (err) {
        Notify.failure('Что-то пошло не так');
        return thunkApi.rejectWithValue(err.message);
      }
    }
  );