import React from 'react';
import './NavBar.scss'; 
import mercadolibre from '../../assets/mercadolibre.png';
import {TfiSearch} from 'react-icons/tfi'

export const NavBar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <img src={mercadolibre} alt="Mercado Libre"/>
    </div>
    <div className="navbar-search">
      <input type="text" placeholder="Buscar"/>
      <button type="submit"> <TfiSearch/> </button>
    </div>
  </nav>
  
  )
}
