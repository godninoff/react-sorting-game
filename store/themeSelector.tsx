import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  settingsBackground: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.settingsBackground = !state.settingsBackground;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
