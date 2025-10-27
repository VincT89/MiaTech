import api from "../lib/api";
/**
 * 
 * @param {object} payload 
 * @param {string} payload.username 
 * @param {string} payload.password 
 * @returns 
 */

export const loginUser = async ({ username, password }) => {
  try {
    const response = await api.post("/auth/login", {
      username,
      password,
      expiresInMins: 120,
    });
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const getMeInfo = async () => {
  try {
    const response = await api.post("/auth/me");
    return response.data;
  } catch (e) {
    throw e;
  }
};
