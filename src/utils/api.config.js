export const API_CONFIG = {
  baseUrl: "",
  timeout: 20000,
  withCredentials: true,
  contentType: "application/json",
};

export const API_ENDPOINTS = {
  login: "/login",
};

export const AUTH_COOKIE_CONFIG = {
  cookieName: "token",
  path: "/",
  sameSite: "strict",
};
