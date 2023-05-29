import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { contactSlice } from './contactSlice';
import { authenticateSlice } from './authSlice';
import { notificationSlice } from './notificationSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [contactSlice.name]: contactSlice.reducer,
      [authenticateSlice.name]: authenticateSlice.reducer,
      [notificationSlice.name]: notificationSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
