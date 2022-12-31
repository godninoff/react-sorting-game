import { createSlice } from "@reduxjs/toolkit";
import { arrayRandElement, gameTheme } from "../utils/utils";

const initialState = arrayRandElement(gameTheme);

export const itemsSlice = createSlice({
  name: "gameTheme",
  initialState,
  reducers: {
    gameThemeState: (state) => state,
  },
});
export default itemsSlice.reducer;
