import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authentifitacionReduces } from "./authentification/authentication.reducer";
import { ordersReducer } from "./orders/orders.reducer";
import { tableReducer } from "./tables/tables.reducer";
import { guestsReducer } from "./guests/guests.reducer";
import { ingredientsReducer } from "./ingredinets/ingredinets.reducer";

const userConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    authStore: persistReducer(userConfig, authentifitacionReduces),
    ordersStore: ordersReducer,
    tablesStore: tableReducer,
    guestsStore: guestsReducer,
    ingredientsStore: ingredientsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
