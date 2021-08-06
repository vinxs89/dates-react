import { configureStore, ThunkAction, Action, createSlice } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    counter: () => createSlice({name: 'test', reducers: {}, initialState: {}}),
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
