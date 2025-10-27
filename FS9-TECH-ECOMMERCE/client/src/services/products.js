import api from "../lib/api";

export const getAllProducts = async (skip = 0, limit = 9) => {
  try {
    const response = await api.get(`/products?limit=${limit}&skip=${skip}`);
    return response.data;
  } catch (e) {
    throw e;
  }
}