import { createReducer } from "@reduxjs/toolkit";

export const dataRedux = createReducer([], {
  ['SET_DATA'](state, action) {
    return action.payload;
  }
})