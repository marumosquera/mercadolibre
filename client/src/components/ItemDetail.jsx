import React from "react";

export const ItemDetail = ({ product }) => {
  const { title, price, picture, id, sold_quantity, condition, description } =
    product;

  return (
    <div>
      <div className="item-detail-info">
        <div>
          <img src={picture} alt={title} />
        </div>
        <div>
          <div>
            <span>{condition}</span>
            <span>|</span>
            <span> {sold_quantity} vendidos </span>
          </div>
          <h1>{title}</h1>
          <div>
            <span>$</span>
            <span>{price.amount}</span>
          </div>
        </div>
      </div>
      <div className="item-detail-description">
        <h3>Descripción del producto</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
