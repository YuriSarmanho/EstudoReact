import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { value: { username: "" } }
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: any, action:any) => {
      state.value = action.payload;
    },

    logout: (state:any) => {
      state.value =  initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
