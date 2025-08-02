
import { createSlice } from "@reduxjs/toolkit";
import { addDishThunk, deleteDishThunk, fetchDishes, fetchDishesById, updateDishThunk } from "./services";

const initialState = {
  dishes: null,
  dishDetails: null,
  isLoading: false,
  isError: null,
};

const dishesRequest = createSlice({
  name: "dishesState",
  initialState,
  reducers: {
    addDish(state, { payload }) {
      state.dishes.unshift(payload);
    },
    deleteDish(state, { payload }) {
      state.dishes = state.dishes.filter((dish) => dish._id !== payload);
    },
    clearState(state) {
     state.dishes = null
     state.dishDetails = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.dishes =  payload.slice().reverse();
      })
      .addCase(fetchDishes.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchDishes.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
        
      })
      .addCase(fetchDishesById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDishesById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.dishDetails = payload;
      })
      .addCase(fetchDishesById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(updateDishThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(updateDishThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.dishes.findIndex(
          (dish) => dish._id === payload._id
        );
        if (index !== -1) {
          state.dishes[index] = payload;
        }
      })
      .addCase(updateDishThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(deleteDishThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteDishThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteDishThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(addDishThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(addDishThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (state.dishes) {
          state.dishes.unshift(payload);
        } else {
          state.dishes = [payload];
        }
      })
      .addCase(addDishThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
        console.log('Ошибка при добавлении:', action);
      });
  },
});

export const dishesReducer = dishesRequest.reducer;
export const {addDish, deleteDish,clearState} = dishesRequest.actions