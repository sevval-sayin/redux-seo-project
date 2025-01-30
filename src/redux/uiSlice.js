
// redux/uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { openModal, closeModal, toggleModal } = uiSlice.actions;
export const selectIsModalOpen = (state) => state.ui.isModalOpen;
export default uiSlice.reducer;
