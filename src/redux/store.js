import { configureStore } from "@reduxjs/toolkit";
import { itemReducer } from "./reducer";

const store = configureStore({
  reducer: { itemReducer },
});

export default store; // Export the store
