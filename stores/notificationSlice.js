import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  flashMessage: {
    message: "",
    status: "",
    title: ""
  }
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setFlashMessage: (state, action) => {
      state.flashMessage = action.payload;
    },
    resetFlashMessage: (state) => {
      state.flashMessage = {
        message: "",
        status: "",
        title: ""
      };
    }
  }
});

export const { setFlashMessage, resetFlashMessage } = notificationSlice.actions;
export const flashMessageSelector = (state) => state.notification.flashMessage;

export default notificationSlice.reducer;
