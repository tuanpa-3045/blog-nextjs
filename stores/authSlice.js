import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  cookie: '',
  isAdmin: false,
};

export const authenticateSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const nameUserSelector = (state) => state.auth.name;

export default authenticateSlice.reducer;
