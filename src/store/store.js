import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../reducers/cardsSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});
