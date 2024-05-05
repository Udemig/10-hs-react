import axios from "axios";
// axiosun ayarlarını bizim belirlediğimiz bir örneğini oluşturmaya yarar
const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
  //   timeout: 4000,
  //   timeoutErrorMessage: "İstek zaman aşımına uğradı",
});
export default api;
