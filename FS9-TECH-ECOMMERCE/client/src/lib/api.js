import axios from "axios";
import { API_URL } from "../config/api";
import { memory } from "../utils/memory";

const api = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json"
	}
});

api.interceptors.request.use(function (config) {
	const auth = memory.get("auth");

	if (auth?.accessToken) {
		config.withCredentials = true;
		config.headers.Authorization = `Bearer ${auth?.accessToken}`;
	}

	return config;
});

export default api;