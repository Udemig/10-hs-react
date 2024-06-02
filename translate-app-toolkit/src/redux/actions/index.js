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
  console.log(p);
  //* API'ye gönderilecek olan parametreleri belirleme
  const params = new URLSearchParams();
  params.set("source_language", p.sourceLang.value);
  params.set("target_language", p.targetLang.value);
  params.set("text", p.text);
  //* API'ye gönderilecek headerı belirledik.
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
  //* API'ye isteğini at
  const res = await api.post("/translate", params, { headers });
  //* Payloadı belirle
  return res.data.data;
});
