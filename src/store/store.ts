import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reduxSlices/dataSlice';

export const store = configureStore({
  reducer: {
    counter: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
