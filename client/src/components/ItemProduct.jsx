import React from "react";
import "../styles/ItemProduct.scss";
import {Link} from 'react-router-dom';

export const ItemProduct = ({ product}) => {
  const { title, price, picture, id, free_shipping } = product;

  return (

    <Link to={`/product/${id}`}>
    <div className="item-product">
      <div className="item-product-image">
        <img src={picture} alt={title} />
      </div>
      <div className="item-product-details">
        <h2> {title}</h2>
        <div className="item-product-price">
          <span> $ </span>
          <span> {price.amount}</span>
        </div>

        {free_shipping && <span className="free-shipping">Envío gratis</span>}
      </div>
    </div>
    </Link>
  );
};
