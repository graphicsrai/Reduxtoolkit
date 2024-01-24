import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemCount: 0,
  cartItem: [],
  mgsColor: "red",
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      console.log(action.type, action.payload);
      state.itemCount = state.itemCount + 1;
      state.mgsColor = "green";
      state.cartItem.push(action.payload);
    },
    remove(state, action) {
      console.log(action.type, action.payload);
      state.itemCount = state.itemCount - 1;
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
      if (state.itemCount === 0) {
        state.mgsColor = "red";
      }
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
