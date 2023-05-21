import { http } from "./index.js";

export const getProductsFromSearch = (query) => {
	return http.get(`/api/items?q=${query}`);
};
