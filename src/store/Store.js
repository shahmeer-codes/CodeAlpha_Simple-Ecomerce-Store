import { configureStore } from "@reduxjs/toolkit";
import addtocart from "./slice";
import data from "../api";
const store = configureStore({
  reducer: {
    store: addtocart.reducer,
    api: data.reducer,
  },
});
export default store;
