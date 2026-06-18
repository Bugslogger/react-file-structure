import axios from "axios";
import Cookies from "universal-cookie";
import { API_CONFIG, AUTH_COOKIE_CONFIG } from "../utils/api.config";
const cookie = new Cookies(null, {
  path: AUTH_COOKIE_CONFIG.path,
  sameSite: AUTH_COOKIE_CONFIG.sameSite,
});

const api = axios.create({
  baseURL: API_CONFIG.baseUrl,
  timeout: API_CONFIG.timeout,
});

// default configuration
api.defaults.withCredentials = API_CONFIG.withCredentials;
api.defaults.headers.common["Content-Type"] = API_CONFIG.contentType;

const interceptor = api.interceptors.request.use((config) => {
  const token = cookie.get(AUTH_COOKIE_CONFIG.cookieName);

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
