import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { getProductsFromSearch } from "../services/searchServices";
import { ItemList } from "./ItemList";
import { AlertContainer } from "./AlertContainer";
import warning from "../assets/warning.png";
import { useParams } from "react-router-dom";
import {Breadcrumb} from "./Breadcrumb";

export const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { query } = useParams();

  async function productsFromSearch() {
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
  }, [query]);

  return (
    <div>
      {!isLoading ? (
        products.length > 0 ? (
          <>
            <Breadcrumb categories={categories} />
            <ItemList products={products} />
          </>
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
