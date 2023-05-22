import { http } from "./index.js";

export const getCategoriesById = (id) => {
	return http.get(`/api/categories/${id}`);
};
