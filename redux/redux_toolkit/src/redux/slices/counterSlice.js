/*
    * Hem reducer'ı hem reducer'ın aksiyonlarını 
    * createSlice methodu ile tek seferde tanımlıyoruz.
    
    todo slice Oluşturma:
    * import { createSlice } from "@reduxjs/toolkit";
    * name:slice ismi > string,
    * initialState:Başlangıç state'i,
    * reducers:Aksiyonların görevini tanımladığımız fonksiyonları ifade eder.

*/

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, isDarkTheme: true },
  //* State'in nasıl değişeceğine karar veren fonksiyonları tanımlarız.
  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    toggleTheme: (state) => {
      console.log(state.isDarkTheme);
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});
//* Slice'ın oluşturduğu reducer fonksiyonunu store'a tanıtmak için export ettik.
export default counterSlice.reducer;

export const { increase, decrease, setCount, toggleTheme } =
  counterSlice.actions;
