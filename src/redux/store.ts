import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "@redux/features/cake/cakeSlice";
import iceCreamReducer from "./features/iceCream/iceCreamSlice";
import { expoLogger } from "expo-redux-logger";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(expoLogger),
});
