import { configureStore } from "@reduxjs/toolkit";

import reducer from "../reducers/reducer";

const store = configureStore({
  reducer: {
    data: reducer.state,
  },
});

export default store;

/*
Store ini digunakan untuk membuat sebuah wadah/tempat yang nantinya dipakai untuk menyimpan state/nilai setiap komponen.
*/
