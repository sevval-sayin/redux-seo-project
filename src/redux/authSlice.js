import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userRole: '', // 'user' veya 'admin'
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userRole = action.payload.role;
      state.token = action.payload.token;
    },
    logout: (state) => {
      Object.assign(state, initialState);
    },
  },
});

// Selector fonksiyonları
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUserRole = (state) => state.auth.userRole;
export const selectAuthToken = (state) => state.auth.token;

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
