import React, { useEffect, useState, useContext } from "react";
import { getProductById } from "../services/productServices.js";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail.jsx";
import { CategoryContext } from "../context/CategoryContext.jsx";
import { Breadcrumb } from "./Breadcrumb.jsx";
import "../styles/ItemDetailContainer.scss";

export const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { categories } = useContext(CategoryContext);

  async function productById() {
    try {
      const api_response = await getProductById(id);
      const item = api_response.data.item;
      setProduct(item);
      console.log(api_response.data.item);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    productById();
  }, []);
  return (
    <>
      {!isLoading && (
        <div>
          <div className="item-detail-listado">
            <span>Volver al listado | </span>
            <Breadcrumb categories={categories} />
          </div>
          <ItemDetail product={product} />
        </div>
      )}
    </>
  );
};
