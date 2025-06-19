import axios from "axios";
import { BASE_URL } from "./endpoints";
import Cookies from "universal-cookie";
const cookie = new Cookies(null, { path: "/", sameSite: "strict" });

const api = axios.create({ baseURL: BASE_URL, timeout: 20000 });

// default configuration
api.defaults.withCredentials = true;
api.defaults.headers.common["Content-Type"] = "application/json";

const interceptor = api.interceptors.request.use((config) => {
  const token = cookie.get("token"); // you need to change cookie name according to what you have set while setting cookie to browser.

  // ✅ Modify request config before sending
  console.log("Outgoing Request:", config);

  // Only attach Authorization header if config.withAuth is true
  if (config.withCredentials) {
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }

  // ⚠️ Do NOT set Content-Type manually for FormData
  if (config.data instanceof FormData) {
    // Let the browser set the correct boundary in multipart/form-data
    config.headers["Content-Type"] = "multipart/form-data";
  }
  return config;
});

const responseInterceptor = api.interceptors.response.use((config) => {
  console.log("Response Interceptor: ", config);

  return config;
});

export function handleRejectInterceptor() {
  api.interceptors.request.eject(interceptor);
  api.interceptors.response.eject(responseInterceptor);
}

export default api;
