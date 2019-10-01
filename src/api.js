import axios from "axios";
require("dotenv/config")
const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL.replace("<porta>", process.env.PORT || 3000)}`
});

export default api;