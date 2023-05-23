import React from "react";
import "../styles/AlertContainer.scss";

export const AlertContainer = ({ image, title, p1, p2 }) => {
  return (
    <article className="alert-container">
      <img src={image} alt="Alerta" />

      <section className="alert-info">
        <h2>{title}</h2>
        <li>{p1}</li>
        <li>{p2}</li>
      </section>
    </article>
  );
};
