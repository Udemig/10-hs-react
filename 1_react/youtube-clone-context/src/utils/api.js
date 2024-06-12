import axios from "axios";

/*
 * Yapılan her istekte geçerli olmasını istedğimiz ayarları tanımladığımız bir axios örneği oluşturalım.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
});
export default api;
