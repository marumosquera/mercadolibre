import React, { useEffect, useState } from "react";
import { getProductById } from "../services/productServices.js";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail.jsx";

export const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  async function productById() {
    try {
      const api_response = await getProductById(id);
      const item = api_response.data.item;
      setProduct(item)
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
  return(
    <>
    {!isLoading &&
        <ItemDetail product={product}/>
    }
    </>
  );
};
