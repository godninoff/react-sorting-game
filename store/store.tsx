import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./index";
import themeReducer from "./themeSelector";
import gameThemeReducer from "./randomItems";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    theme: themeReducer,
    gameTheme: gameThemeReducer,
  },
});
