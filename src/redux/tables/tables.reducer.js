import { createSlice } from "@reduxjs/toolkit";
import {
  addTablesThunk,
  deleteTablesThunk,
  fetchTables,
  fetchTablesById,
} from "./services";
import { fetchOrderById } from "../orders/services";

const initialState = {
  tables: null,
  currentTable: null,
  isLoading: false,
  isError: false,
};

const tableReducerState = createSlice({
  name: "tableState",
  initialState,
  reducers: {
    addTable(state, { payload }) {
      state.orders.push(payload);
    },
    deleteTable(state, { payload }) {
      state.orders = state.orders.filter((order) => order._id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTables.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.tables = payload.slice().reverse();
      })
      .addCase(fetchTables.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchTables.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(fetchTablesById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrderById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.tablesDetails = payload;
      })
      .addCase(fetchOrderById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(deleteTablesThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteTablesThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteTablesThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(addTablesThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(addTablesThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (state.tables) {
          state.tables.unshift(payload);
        } else {
          state.tables = [payload];
        }
      })
      .addCase(addTablesThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const tableReducer = tableReducerState.reducer;
export const { addTable, deleteTable } = tableReducerState.actions;
