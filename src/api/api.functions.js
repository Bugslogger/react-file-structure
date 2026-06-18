import api from "./axios.config";
import { API_ENDPOINTS } from "../utils/api.config";

export async function loginAPI(data) {
  try {
    const response = await api.post(API_ENDPOINTS.login, data, {
      withCredentials: false,
    });
    return {
      data: response.data,
      status: response.status,
      isError: false,
    };
  } catch (error) {
    return { error, isError: true };
  }
}
