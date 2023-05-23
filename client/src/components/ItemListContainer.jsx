import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { getProductsFromSearch } from "../services/searchServices";
import { ItemList } from "./ItemList";
import { AlertContainer } from "./AlertContainer";
import warning from "../assets/warning.png";
import { useParams } from "react-router-dom";
import { BreadcrumbSearch } from "./BreadcrumbSearch";
import { CategoryContext } from "../context/CategoryContext.jsx";
import { Pagination } from "./Pagination";
import "../styles/ItemListContainer.scss";

export const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);
  const { setCategories, categories } = useContext(CategoryContext);
  const { query } = useParams();

  async function productsFromSearch() {
    try {
      const api_response = await getProductsFromSearch(query);
      const items = api_response.data.items;
      const productCategories = api_response.data.categories;
      setProducts(items);
      setCategories(productCategories);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    productsFromSearch();
  }, [query]);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {!isLoading ? (
        products.length > 0 ? (
          <>
            <BreadcrumbSearch categories={categories} />
            <div className="result-container">
              <ItemList products={currentProducts} query={query} />
            </div>
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
              currentPage={currentPage}
            />
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
