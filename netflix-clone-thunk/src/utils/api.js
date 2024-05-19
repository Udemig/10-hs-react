import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // Yapacağımız bütün isteklere eklenilecek olan header
  headers: {
    accept: "application/json",
    // yetkilendirme
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
  params: {
    language: "tr-TR",
  },
});
