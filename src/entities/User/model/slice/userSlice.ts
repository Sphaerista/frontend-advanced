import { createSlice } from "@reduxjs/toolkit";
import { UserSchema } from "../types/userSchema";

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// экспортируем сами actions и reducer
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
