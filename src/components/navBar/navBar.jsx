// NavBar.js
import React, { useRef, useContext } from 'react';
import './navBar.css';
import search from '../../img/search.png';
import { SearchContext } from '../alt/searchContext';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const searchInputRef = useRef(null);
  const { setSearchValue } = useContext(SearchContext);


  const searchEffect = () => {
    if (searchInputRef.current) {
      searchInputRef.current.style.width = '200px';
      searchInputRef.current.style.opacity = '1';
      searchInputRef.current.focus();
    }
    const sB = document.getElementById('search_btn');
    sB.style.display = 'none';
  }

  const onBlurEffect = () => {
    if (searchInputRef.current) {
      searchInputRef.current.style.width = '0';
      searchInputRef.current.style.opacity = '0';
    }
    const sB = document.getElementById('search_btn');
    sB.style.display = 'flex';
  }

  const onChangeEffect = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className='navBar_container'>
      <ul>
        <li><Link to={'/'}> Home </Link></li>
        <li><Link to={'/'}>Movies</Link></li>
        <li><Link to={'/'}>Series</Link></li>
      </ul>

      <div className='search_container'>
        <img className='search_icon' id='search_btn' src={search} onClick={searchEffect} alt="" />
        <input 
          type="text" 
          id="search_input" 
          ref={searchInputRef} 
          onChange={onChangeEffect} 
          onBlur={onBlurEffect} // Agrega el evento onBlur aquí
        />
      </div>
    </div>
  )
}
