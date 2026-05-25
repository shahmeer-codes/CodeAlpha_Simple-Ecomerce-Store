import { createSlice } from "@reduxjs/toolkit";
const beforeselected = JSON.parse(localStorage.getItem("items")) || []; //if nothing then return empty array
const initialState = {
  itemadded: beforeselected,
};
const addtocart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.itemadded.push(action.payload); //this is the item array the igive in cards when i call add
      localStorage.setItem("items", JSON.stringify(state.itemadded));
    },
    removesingleitem: (state, action) => {
      state.itemadded = state.itemadded.filter(
        (item) => item.id != action.payload,
      );

      localStorage.setItem("items", JSON.stringify(state.itemadded)); //it overwrite the previous data having key items
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.itemadded.find((i) => i.id === id);

      if (item) {
        item.quantity = Number(quantity);
      }

      localStorage.setItem("items", JSON.stringify(state.itemadded));
    },
    placeorder: (state) => {
      state.itemadded = [];
      alert("Your order is placed...");
      localStorage.clear();
    },

    clear: (state) => {
      state.itemadded = [];
      localStorage.clear();
    },
  },
});
export const { add, clear, removesingleitem, updateQuantity, placeorder } =
  addtocart.actions;
export default addtocart;
