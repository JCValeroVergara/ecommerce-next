import { configureStore } from '@reduxjs/toolkit';
import { origenSlice } from './miSlice.js';

export default configureStore({
  reducer: {
    misValores: origenSlice.reducer,
  },
});