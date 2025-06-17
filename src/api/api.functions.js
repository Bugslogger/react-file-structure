import api from "./axios.config";
import { LOGIN } from "./endpoints";

export async function loginAPI(data) {
  try {
    const response = await api.post(LOGIN, data);
    return {
      data: response.data,
      status: response.status,
      error,
      isError: false,
    };
  } catch (error) {
    return { error, isError: true };
  }
}
