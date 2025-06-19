import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";

const useValidateUser = () => {
  /**
   *
   * @param {string} param.cookieName - Name of cookie which will be stored in browser.
   * @param {string} [param.path = "/"] - Path of cookie. default path is set to `/`.
   * @returns {object}
   *
   */
  function handleValidation({ cookieName = "token", path = "/" }) {
    if (!cookieName) {
      throw new Error(
        "Cookie name is required. Pass cookieName as an argument to function handleValidation."
      );
    }

    const cookie = new Cookies(null, { path: path, sameSite: "strict" });
    const token = cookie.get(cookieName);
    console.log("token: ", token);

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded);

        const { exp } = decoded;
        const currentDate = new Date();
        const currentTimestamp = currentDate.getTime();

        if (exp * 1000 > currentTimestamp) {
          return { user: decoded, token: token, isValid: true };
        }
        return { user: decoded, token: token, isValid: false };
      } catch (error) {
        return { user: null, token: token, isValid: false };
      }
    }
    return { user: null, token: token, isValid: false };
  }

  /**
   *
   * @param {string} param.token -  passing jwt token as an argument will set the token in browser.
   * @param {string} [param.path = "/"] - Path of cookie. default path is set to `/`.
   * @returns {void}
   *
   */
  function setToken({ token, path = "/", cookieName }) {
    const cookie = new Cookies(null, { path: path, sameSite: "strict" });
    if (!cookieName) {
      throw new Error(
        "Cookie name is required. Pass cookieName as an argument to function handleValidation."
      );
    }
    if (!token) {
      throw new Error(
        "Token is required. Pass token as an argument to function setToken."
      );
    }
    cookie.set(cookieName, token);
  }

  /**
   *
   * @param {string} param.path  - Path of cookie. default path is set to `/`.
   * @returns {void}
   *
   */
  function getAllCookies({ path = "/" }) {
    const cookie = new Cookies(null, { path: path, sameSite: "strict" });
    return cookie.getAll(); // returns all cookies
  }

  function removeCookies({ path = "/", cookieName, callback }) {
    const cookie = new Cookies(null, { path: path, sameSite: "strict" });
    cookie.remove(cookieName || "token", { path: path });
    if (typeof callback === "function") {
      if (
        !cookie.get(cookieName || "token") ||
        cookie.get(cookieName || "token") === undefined
      ) {
        callback({ isRemoved: true }); // function will be called when cookie is removed
      } else {
        callback({ isRemoved: false });
      }
    }
    // cookie.remove("token" || cookieName); // removes token cookie
  }

  return { handleValidation, setToken, getAllCookies, removeCookies };
};

export default useValidateUser;
