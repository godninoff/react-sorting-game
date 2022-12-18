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
  onSubmitGame: () => void;
  setGameBackground: (active: boolean) => void;
  setSettingsBackground: (active: boolean) => void;
}

const initialState: Settings = {
  quantity: [2, 3, 4, 5],
  values: ["A", "9", "19", "50", "99", "999"],
  sorted: "increase",
  choosenQuantity: 2,
  choosenValue: "A",
  choosenSort: "increase",
  onSubmitGame: function (): void {
    throw new Error("Function not implemented.");
  },
  setGameBackground: function (): void {
    throw new Error("Function not implemented.");
  },
  setSettingsBackground: function (): void {
    throw new Error("Function not implemented.");
  },
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
