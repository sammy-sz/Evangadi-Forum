import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://efbackend.onrender.com/api",
});

export default axiosInstance;
