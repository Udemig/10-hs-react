import axios from "axios";

export default axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "92f8a72de5msh9603ca7bfc2c56fp1356f9jsn1db464323983",
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
  },
});
