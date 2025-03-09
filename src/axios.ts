// create axios instance
import axios from "axios";

interface ImportMetaEnv {
  readonly VITE_TARGETED_URL: string;
  readonly VITE_KHURSHID_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Use the environment variables from .env (e.g., VITE_TARGETED_URL=https://208.109.240.175:3000/api)
const apiUrl = import.meta.env.VITE_TARGETED_URL;
const accessToken = import.meta.env.VITE_KHURSHID_ACCESS_TOKEN;

console.log("API URL:", apiUrl);
console.log("Access Token:", accessToken);

export const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true, // enable sending cookies for CORS
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});

export const axiosExternalInstance = axios.create({
  baseURL: `${apiUrl}/external`,
  withCredentials: true, // enable sending cookies for CORS
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});
