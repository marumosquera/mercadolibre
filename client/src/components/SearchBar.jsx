import React from 'react';
import {TfiSearch} from 'react-icons/tfi';
import '../styles/SearchBar.scss';


export const SearchBar = ({placeholder}) => {
  return (
    <div className='search'>
      <input type="text" placeholder={placeholder}/>
      <button type="submit"> <TfiSearch/> </button>
    </div>
  )
}
