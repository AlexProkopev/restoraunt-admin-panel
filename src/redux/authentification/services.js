import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToken } from "./authentication.reducer";
import { instance } from "../basic_url";

export const fetchUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/login", formData);
      setToken(data.token);
      localStorage.setItem("token", data.token);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response?.data?.message || "Ошибка");
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      let token = thunkApi.getState().authStore.token;

      if (!token) {
        token = localStorage.getItem("token");
        if (!token) return thunkApi.rejectWithValue("No token found");
      }

      setToken(token);

      const { data } = await instance.get("login/current");
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logOut",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("api/logout");
      localStorage.removeItem("token");
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
