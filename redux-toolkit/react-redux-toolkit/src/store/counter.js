import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {counterValue: 0},
  reducers: {
    increase: (state) => {
      state.counterValue++;
    },
    decrease: (state) => {
      state.counterValue--;
    }
  }
});

export const counterActions = counterSlice.actions;
export default counterSlice;