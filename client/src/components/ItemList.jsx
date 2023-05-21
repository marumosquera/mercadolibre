import React from 'react';
import { ItemProduct } from './ItemProduct';

export const ItemList = ({products}) => {
  return (
    <>
    {products.map((product) => {
      return (
        <div>
          <ItemProduct key={product.id} product={product} />
        </div>
      );
    })}
  </>
  )
}
