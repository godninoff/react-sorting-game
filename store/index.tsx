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
  choosenQuantity: 0,
  choosenValue: "",
  choosenSort: "",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    // setSettings: (state, action: PayloadAction<Settings>) => {
    //   state.quantity = action.payload.quantity;
    //   state.values = action.payload.values;
    //   state.sorted = action.payload.sorted;
    // },
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
