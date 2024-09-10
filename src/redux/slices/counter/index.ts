import { createSlice } from "@reduxjs/toolkit";


 const counterSlice = createSlice({
    initialState: 2,
    name: "counter",
    reducers: {
      increment: (state) => state + 1,
      decrement: (state) => state - 1,
    },
  });

export const { decrement, increment } = counterSlice.actions;
export default counterSlice.reducer;


