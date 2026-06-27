import axios from "axios";
import env from "./env";
import { getCookie } from "@/utils/storage";
import { STORAGE_KEYS } from "@/utils/constants";

const axiosInstance = axios.create({
  baseURL: env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  if (typeof document !== "undefined") {
    const token = getCookie(STORAGE_KEYS.TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default axiosInstance;