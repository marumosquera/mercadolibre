import React, { useState } from "react";
import { useEffect } from "react";
import { getProductsFromSearch } from "../services/searchServices";
import { ItemList } from "./ItemList";
import "../styles/ItemListContainer.scss";
import { AlertContainer } from "./AlertContainer";
import warning from "../assets/warning.png";

export const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  async function productsFromSearch() {
    const query = "ipad";
    try {
      const api_response = await getProductsFromSearch(query);
      const items = api_response.data.items;
      const productCategories = api_response.data.categories;
      setProducts(items);
      setCategories(productCategories);
      console.log(api_response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    productsFromSearch();
  }, []);

  return (
    <div>
      {!isLoading ? (
        products.length > 0 ? (
          <ItemList products={products} />
        ) : (
          <AlertContainer
            image={warning}
            title={"No hay productos que coincidan con tu búsqueda"}
            p1={"Revisá la ortografía de la palabra."}
            p2={"Volve al home para volver a intentar."}
          />
        )
      ) : null}
    </div>
  );
};
