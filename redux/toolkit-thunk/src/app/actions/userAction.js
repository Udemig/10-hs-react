import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
/*
    Asenkron Thunk Aksiyonu
    * Bizden istediği parametreler
    * 1) Aksiyonun tipi
    * 2) Aksiyonun payloadını return eden fonksiyon
*/
export const getUsers = createAsyncThunk("updated/getUsers", async () => {
  // asenkron işlem
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  // bu fonksiyon mutlaka aksiyonun payloadını return etmeli
  return res.data;
});
