import axios from "axios";
import { BASE_URL } from "./endpoints";
import Cookies from "universal-cookie";
const cookie = new Cookies(null, { path: "/", sameSite: "strict" });

const api = axios.create({ baseURL: BASE_URL, timeout: 20000 });

const interceptor = api.interceptors.request.use((config) => {
  const token = cookie.get("token");

  // ✅ Modify request config before sending
  console.log("Outgoing Request:", config);

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  // ⚠️ Do NOT set Content-Type manually for FormData
  if (config.data instanceof FormData) {
    // Let the browser set the correct boundary in multipart/form-data
  }
  return config;
});

const responseInterceptor = api.interceptors.response.use((config) => {
  console.log(config);

  return config;
});

export function handleRejectInterceptor() {
  api.interceptors.request.eject(interceptor);
  api.interceptors.response.eject(responseInterceptor);
}

export default api;
