import React from 'react';
import '../styles/NavBar.scss'; 
import mercadolibre from '../assets/mercadolibre.png';
import { SearchBar } from './SearchBar';


export const NavBar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <img src={mercadolibre} alt="Mercado Libre"/>
    </div>
    <div className="navbar-search">
      <SearchBar placeholder={"Buscar productos, marcas y más..."}/>
    </div>
  </nav>
  
  )
}
