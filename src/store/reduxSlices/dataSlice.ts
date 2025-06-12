import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  IsOpen: boolean;
  SelectedType: string;
  Category: string;
}

const initialState: DataState = { IsOpen: false, SelectedType: "all", Category: "All" };

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<{ IsOpen: boolean; SelectedType: string, Category: string }>) => {
      state.IsOpen = action.payload.IsOpen;
      state.SelectedType = action.payload.SelectedType;
      state.Category = action.payload.Category;
    },
    resetData: () => initialState,
  },
});

export const { setData, resetData } = dataSlice.actions;
export default dataSlice.reducer;
