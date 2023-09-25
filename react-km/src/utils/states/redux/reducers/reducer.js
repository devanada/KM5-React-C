import { createSlice } from "@reduxjs/toolkit";

function getItems() {
  const getItem = localStorage.getItem("products");

  if (getItem) {
    const parseProducts = JSON.parse(getItem);
    return parseProducts;
  }

  return [];
}

const initialState = {
  isLoggedIn: false,
  token: "",
  theme: localStorage.getItem("theme") ?? "light",
  products: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      productName: "John",
      productCategory: "Doe",
      productFreshness: "Doe",
      productPrice: "Doe",
      image: "Doe",
      additionalDescription: "Doe",
    },
  ],
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      localStorage.setItem("products", JSON.stringify(action.payload));
    },
    editProducts: (state, action) => {
      // TODO: Pindahkan fungsi edit ke sini
      // let dupe = ...........
      // state.products = dupe
    },
    deleteProducts: (state, action) => {
      // TODO: Pindahkan fungsi delete ke sini
      // let dupe = ...........
      // state.products = dupe
    },
    changeTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
    handleAuth: (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { setProducts, changeTheme, handleAuth, handleLogout } =
  sliceState.actions;
export default reducer;

/*
Fungsi reducer adalah sebuah function yang menerima 2 parameter, yaitu state dan action, yang mana memiliki tugas untuk merubah value dari initial state menjadi nilai yang baru
 */
