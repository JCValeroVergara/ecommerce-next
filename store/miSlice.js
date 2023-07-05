import { createSlice } from '@reduxjs/toolkit';

export const origenSlice = createSlice({
  name: 'misValores',
  initialState: {
    categoria: '',
    miCarrito: [],
  },
  reducers: {
    setCategoria: (state, action) => {
      state.categoria = action.payload;
    },
    comprar: (state, action) => {
      state.miCarrito=[...state.miCarrito,action.payload];
    },
    devolver: (state, action) => {
      state.miCarrito = state.miCarrito.filter((item) => item.producto!== action.payload);
    }
  },
});

export const { setCategoria, comprar, devolver } = origenSlice.actions;