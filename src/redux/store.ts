import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "@redux/features/cake/cakeSlice";
import iceCreamReducer from "./features/iceCream/iceCreamSlice";

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
});
