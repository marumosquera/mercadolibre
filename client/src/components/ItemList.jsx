import React from "react";
import { ItemProduct } from "./ItemProduct";

export const ItemList = ({ products,query }) => {
  return (
    <>
      {products.map((product, index) => {
        return (
          <div key={index + 1}>
            <ItemProduct product={product} query={query} />
          </div>
        );
      })}
    </>
  );
};
