import { http } from "./index.js";

export const getProductById = (id) => {
	return http.get(`/api/items/${id}`);
};
