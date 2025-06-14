import { createSlice } from "@reduxjs/toolkit";

const item = createSlice({
  initialState: {},
  name: "reducer",
  reducers: {},
});

// create and export reducers here
export const itemReducer = item.reducer;
