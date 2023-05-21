import React from "react";
import "../styles/NavBar.scss";
import mercadolibre from "../assets/mercadolibre.png";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={mercadolibre} alt="Mercado Libre" />{" "}
        </Link>
      </div>
      <div className="navbar-search">
        <SearchBar placeholder={"Buscar productos, marcas y más..."} />
      </div>
    </nav>
  );
};
