import React, { useEffect, useState, useContext } from "react";
import { getProductById } from "../services/productServices.js";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail.jsx";
import { BreadcrumbProduct } from "./BreadcrumbProduct.jsx";
import "../styles/ItemDetailContainer.scss";
import { useNavigate } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { id, query } = useParams();
  const navigate = useNavigate();

  async function productById() {
    try {
      const api_response = await getProductById(id);
      const item = api_response.data.item;
      setProduct(item);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  const goBackToQuery = () => {
    navigate(`/search/${query}`);
  };

  useEffect(() => {
    productById();
  }, []);
  return (
    <>
      {!isLoading && (
        <article >
          <div className="item-detail-listado">
            <span className="span-listado-breadcrumb" onClick={goBackToQuery}>
              Volver al listado{" "}
            </span>
            <BreadcrumbProduct categoryId={product.categoryId} />
          </div>
          <div className="item-detail-container">
            <ItemDetail product={product} />
          </div>
        </article>
      )}
    </>
  );
};
