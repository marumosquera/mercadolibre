import React from 'react';
import { AlertContainer } from "../components/AlertContainer";
import warning from "../assets/warning.png";

export const ErrorPage = () => {
  return (
    <AlertContainer
      image={warning}
      title={"No hay paginas que coincidan con tu búsqueda"}
      p1={
        "Revisá la ortografía de la palabra."
      }
      p2={
        "Volve al home para volver a intentar."
      }
    />
  )
}
