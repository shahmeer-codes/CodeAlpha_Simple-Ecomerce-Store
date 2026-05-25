import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchdata = createAsyncThunk("data", async () => {
  const f = await fetch("https://dummyjson.com/products");
  const data = await f.json();
  return data;
});
const initialState = {
  items: [],
  status: "idle",
};
const data = createSlice({
  name: "apidata",
  initialState,
  extraReducers: (s) => {
    s.addCase(fetchdata.fulfilled, (state, action) => {
      ((state.status = "succeeded"), (state.items = action.payload));
    });
  },
});
export default data;
