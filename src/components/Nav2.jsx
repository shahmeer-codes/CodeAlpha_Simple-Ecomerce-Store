import React from "react";
import { useDispatch } from "react-redux";
import { clear } from "../store/slice";
const Nav2 = () => {
  const d = useDispatch();
  return (
    <div className="flex justify-end m-5">
      <button
        onClick={() => {
          d(clear());
        }}
        className="bg-red-600 active:scale-95 text-white hover:bg-red-500  p-2 w-40 h-10 rounded-2xl"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Nav2;
