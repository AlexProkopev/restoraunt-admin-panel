import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import { fetchUser, logOutThunk, refreshThunk } from "./services";
import { instance } from "../basic_url";


export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const initialState = {
  userData: null,
  authentifitacion: false,
  token: null,
  role: null,
   isRefreshing: false,
  isLoading: false,
  isError: null,
};

const authentifitacionSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authentifitacion = true;
        state.token = payload.accessToken;
        state.userData = payload.user;
        state.role = payload.role;
        Notify.success("Log In successful");
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.authentifitacion = true;
        state.userData = payload;
        state.role = payload.role;
        state.token = localStorage.getItem("token");
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoading = false;
        state.authentifitacion = false;
        state.token = null;
        state.userData = null;
        state.role = null;
      })
      .addCase(logOutThunk.fulfilled, () => {
        localStorage.removeItem("token");
        instance.defaults.headers.common.Authorization = "";
        return initialState;
      })

      .addMatcher(
        isAnyOf(fetchUser.pending, logOutThunk.pending),
        (state) => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchUser.rejected,
          logOutThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.isError = payload;
        }
      ),
});

export const authentifitacionReduces = authentifitacionSlice.reducer;
