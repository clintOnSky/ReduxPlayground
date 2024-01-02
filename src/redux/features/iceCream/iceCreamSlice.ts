import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
});

const iceCreamReducer = iceCreamSlice.reducer;
export default iceCreamReducer;
export const iceCreamAction = iceCreamSlice.actions;
