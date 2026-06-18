import { createSlice } from "@reduxjs/toolkit";

const item = createSlice({
  initialState: {},
  name: "reducer",
  reducers: {},
});

const auth = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    token: null,
    user: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload?.token || null;
      state.user = action.payload?.user || null;
    },
    clearCredentials: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    },
  },
});

// create and export reducers here
export const itemReducer = item.reducer;
export const authReducer = auth.reducer;
export const { setCredentials, clearCredentials } = auth.actions;
