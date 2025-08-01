
import { createSlice } from "@reduxjs/toolkit";
import {
    addIngredientThunk,
  deleteIngredientThunk,
  fetchIngredientById,
  fetchIngredients,
  updateIngredientThunk,

} from "./services";

const initialState = {
  ingredients: null,
  ingredientDetails: null,
  isLoading: false,
  isError: null,
};

const ingredientsRequest = createSlice({
  name: "ingredientsState",
  initialState,
  reducers: {
    addIngredient(state, { payload }) {
      state.ingredients.unshift(payload);
    },
    deleteIngredient(state, { payload }) {
      state.ingredients = state.ingredients.filter((ingredient) => ingredient._id !== payload);
    },
    clearState(state) {
     state.ingredients = null
     state.ingredientDetails = null
    },
    
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.ingredients =  payload.slice().reverse();
      })
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchIngredients.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
        
      })
      .addCase(fetchIngredientById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchIngredientById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.ingredientDetails = payload;
      })
      .addCase(fetchIngredientById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(updateIngredientThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(updateIngredientThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        const index = state.ingredients.findIndex(
          (ingredient) => ingredient._id === payload._id
        );
        if (index !== -1) {
          state.ingredients[index] = payload;
        }
      })
      .addCase(updateIngredientThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(deleteIngredientThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteIngredientThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteIngredientThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(addIngredientThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(addIngredientThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (state.ingredients) {
          state.ingredients.unshift(payload);
        } else {
          state.ingredients = [payload];
        }
      })
      .addCase(addIngredientThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
        console.log('Ошибка при добавлении:', action);
      });
  },
});

export const ingredientsReducer = ingredientsRequest.reducer;
export const {addIngredient, deleteIngredient,clearState} = ingredientsRequest.actions