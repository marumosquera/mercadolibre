import React from "react";
import "../styles/ItemDetail.scss";

export const ItemDetail = ({ product }) => {
  const { title, price, picture, id, sold_quantity, condition, description } =
    product;

  return (
    <>
      <section className="item-detail-container" aria-label="Detalles del producto">
        <div className="item-detail-info">
          <div className="item-img-container">
            <img src={picture} alt={title} />
          </div>
          <div className="item-detail-info-container">
            <div className="item-detail-info-status">
              <span>{condition}</span>
              <span>|</span>
              <span> {sold_quantity} vendidos </span>
            </div>
            <h1>{title}</h1>
            <div className="item-detail-info-price">
              <span>$</span>
              <span>{price.amount}</span>
            </div>
            <button type="submit"> Comprar ahora </button>
          </div>
        </div>
        <div className="item-detail-description">
          <h3>Descripción del producto</h3>
          <p>{description}</p>
        </div>
      </section>
    </>
  );
};
