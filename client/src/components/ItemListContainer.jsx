import React from "react";
import { useEffect } from "react";
import { getProductsFromSearch } from "../services/searchServices";

export const ItemListContainer = () => {

  async function productsFromSearch() {
    const query = "ipad";
    try {
      const api_response = await getProductsFromSearch(query);

      if (api_response.data.status) {
        console.log(api_response.data.status);
      }
    } catch (err) {
      console.log(err);
    } finally {
      console.log("");
    }
  }
  
  useEffect(()=>{
    productsFromSearch()
  }, [])

  return (
    <div>

    </div>
  );
};
