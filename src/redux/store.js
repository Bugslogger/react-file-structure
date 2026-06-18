import { configureStore } from "@reduxjs/toolkit";
import { authReducer, itemReducer } from "./reducer";

const store = configureStore({
  reducer: { itemReducer, auth: authReducer },
});

export default store;
