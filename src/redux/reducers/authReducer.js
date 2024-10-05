import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  _id: '',
  fullName: '',
  email: '',
  isVerified: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addAuth: (state, action) => {
      const { token, _id, fullName, email, isVerified } = action.payload;
      state.token = token;
      state._id = _id;
      state.fullName = fullName;
      state.email = email;
      state.isVerified = isVerified;
    },
  },
});

const authReducer = authSlice.reducer;

export const { addAuth } = authSlice.actions;
export default authReducer;
