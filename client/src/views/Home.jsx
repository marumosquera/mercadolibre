import React from "react";
import search from "../assets/search-home.png";
import { AlertContainer } from "../components/AlertContainer";

export const Home = () => {
  return (
    <AlertContainer
      image={search}
      title={"Escribí en el buscador lo que querés encontrar."}
      p1={
        "Escribí tu búsqueda en el campo que figura en la parte superior de la pantalla."
      }
      p2={
        "Navegá por categorías de productos para encontrar el producto que buscás."
      }
    />
  );
};
