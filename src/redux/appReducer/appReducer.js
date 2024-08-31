import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "amazon",
  initialState: {
    userData: {},
    products: [],
    selectedProduct: {},
    cartItems: [],
    userAddress: {},
  },

  reducers: {
    setUserData: (state, action) => {
      console.log("state---------------",state);
      console.log("action---------------",action);
      state.userData = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
    setAddress: (state, action) => {
      state.userAddress = action.payload;
    },
  },
});

export const {
  setUserData,
  setProducts,
  setSelectedProduct,
  setCartItems,
  setAddress,
} = appSlice.actions;

export default appSlice.reducer;