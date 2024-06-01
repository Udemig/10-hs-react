import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../utils/api";
//* Asenkron thunk aksiyonu
export const getLanguages = createAsyncThunk(
  "languages/getLanguages",
  async () => {
    //* API isteği atılır
    const res = await api.get("/getLanguages");

    //* payloada return edilir
    return res.data.data.languages;
  }
);

export const translateText = createAsyncThunk("translate", async (p) => {
  console.log(p.text);
});
