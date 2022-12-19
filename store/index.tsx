import {
  configureStore,
  createSlice,
  PayloadAction,
  combineReducers,
} from "@reduxjs/toolkit";

export interface Settings {
  quantity: number[];
  values: string[];
  sorted: string;
  choosenQuantity: number;
  choosenValue: string;
  choosenSort: string;
}

const initialState: Settings = {
  quantity: [2, 3, 4, 5],
  values: ["A", "9", "19", "50", "99", "999"],
  sorted: "increase",
  choosenQuantity: 2,
  choosenValue: "A",
  choosenSort: "increase",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setQuantity: (state, action: PayloadAction<number>) => {
      return { ...state, choosenQuantity: action.payload };
    },
    setValue: (state, action: PayloadAction<string>) => {
      return { ...state, choosenValue: action.payload };
    },
    setSorted: (state, action: PayloadAction<string>) => {
      return { ...state, choosenSort: action.payload };
    },
  },
});

export const { setQuantity, setValue, setSorted } = settingsSlice.actions;
export default settingsSlice.reducer;
