import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "@redux/features/cake/cakeSlice";
import iceCreamReducer from "./features/iceCream/iceCreamSlice";
import { expoLogger } from "expo-redux-logger";

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(expoLogger),
});
