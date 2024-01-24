// import { createSlice } from "@reduxjs/toolkit";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = {
//     data:[],
// };
// const productSlice = createSlice({
//     name:'products',
//     initialState,
//     reducers:{
//         fetchProducts(state,action){
//             state.data = action.payload;
//         }
//     }
// });

// export const {fetchProducts} = productSlice.actions;
// export default productSlice.reducer;

// export function getProducts(){
//     return async function getProductsThunk(dispatch,getState){
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result = await data.json();
//         dispatch(fetchProducts(result));
//     }
// }
// inintial state
const initialState = {
  data: [],
  status: null,
};
//async thunk creation
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    return result?.data;
  }
);
// slice creation
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state) => {
        state.status = "pending";
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(productsFetch.rejected, (state) => {
        state.status = "rejected";
      });
  },
});
export default productSlice.reducer;
