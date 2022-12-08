import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./index";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});
