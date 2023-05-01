import { createSlice } from "@reduxjs/toolkit";

type initialStatetypes = {
  items: product[];
};

const initialState: initialStatetypes = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const itemsCopy = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = itemsCopy;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectItems = (state: any): product[] => state.cart.items;
export const selectTotal = (state: any): number =>
  state.cart.items.reduce(
    (total: number, item: product) => total + item.price,
    0
  );

export default cartSlice.reducer;
