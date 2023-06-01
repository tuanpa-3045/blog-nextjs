import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as services from '../services'
import { setFlashMessage } from './notificationSlice';
import { flashMessageStatus } from '../utils/constants';

const initialState = {
  loading: false,
  listContact: [],
};

export const addContact = createAsyncThunk(
  'contact/addContact',
  async (data, { rejectWithValue }) => {
    try {
      await services.addContact(data);
      dispatch(setFlashMessage({
        message: 'Message sent successfully!',
        status: flashMessageStatus.SUCCESS,
        title: 'Success!',
      }))
    } catch (error) {
      dispatch(setFlashMessage({
        message: error.message,
        status: flashMessageStatus.ERROR,
        title: 'Error!',
      }))
      return rejectWithValue({});
    }
  }
);

export const getListContact = createAsyncThunk(
  'contact/addContact',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await services.addContact(data);
    } catch (error) {
      return rejectWithValue({});
    }
  }
);

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addContact.pending, (state) => {
      state.loading = true
    })
    builder.addCase(addContact.fulfilled, (state) => {
      state.loading = false
    });
    builder.addCase(addContact.rejected, (state) => {
      state.loading = false
    });
  },
});

export const contactSelector = (state) => state.contacts.listContact;
export const loadingSelector = (state) => state.contacts.loading;

export default contactSelector.reducer;
