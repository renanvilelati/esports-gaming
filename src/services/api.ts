import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE__API_URL
})

export default api
