import React from 'react';
import { ItemListContainer } from '../components/ItemListContainer';
import "../styles/SearchResults.scss";

export const SearchResults = () => {
  return (
    <div className='result-container'>
      <ItemListContainer/>
    </div>
  )
}
