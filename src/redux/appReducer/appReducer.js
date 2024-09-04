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
      console.log("user data------", action.payload);
      state.userData = action.payload;
    },
    setProducts: (state, action) => {
      
      state.products = action.payload;
    },
    setSelectedProduct: (state, action) => {
      console.log("action payload in reducer:", action.payload); // Debugging
      state.selectedProduct = action.payload;
    },
    setCartItems: (state, action) => {
      console.log("setCartItems:", action.payload); // Debugging
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