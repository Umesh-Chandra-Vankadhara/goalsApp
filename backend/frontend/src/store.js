// src/redux.js
import { configureStore } from "@reduxjs/toolkit";
import { goalsReducer } from "./features/goals/goalSlice";
import { authReducer } from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalsReducer,
  },
});
