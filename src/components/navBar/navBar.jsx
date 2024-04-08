// NavBar.js
import React, { useRef, useContext, useEffect } from 'react';
import './navBar.css';
import search from '../../img/search.png';
import menu from '../../img/menu.png';
import close from '../../img/close.png';
import { SearchContext } from '../alt/searchContext';
import { Link, useLocation } from 'react-router-dom';


export default function NavBar() {
  const location = useLocation();
  const searchInputRef = useRef(null);
  const { setSearchValue } = useContext(SearchContext);


  useEffect(() => {
    setSearchValue(''); 
    if (searchInputRef.current) {
      searchInputRef.current.value = ''; 
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  


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

  const onClickMenu = (isActive) => {

    const menu = document.getElementById('menu_button');
    const close = document.getElementById('close_button');
    const links = document.getElementById('navBar_links');

    if (isActive === true) {
      menu.style.display = 'none';
      close.style.display = 'flex';
      links.style.left = '0';
    }
    else{
      menu.style.display = 'flex';
      close.style.display = 'none';
      links.style.left = '-300px';
    }
  }

  return (
    <div className='navBar_container'>
      <ul id='navBar_links' className='navBar_links'>
        <li><Link to={'/'} > Home </Link></li>
        <li><Link to={'/movies'}>Movies</Link></li>
        <li><Link to={'/series'} >Series</Link></li>
       
      </ul>

        <img onClick={() => onClickMenu(true)} id='menu_button' className='menu_button' src={menu} alt="" /> 
        <img onClick={() => onClickMenu(false)} id='close_button' className='close_button' src={close} alt="" /> 

      

      <div className='search_container'>
        <img className='search_icon' id='search_btn' src={search} onClick={searchEffect} alt="" />
        <input 
          type="text" 
          id="search_input"   
          ref={searchInputRef} 
          onChange={onChangeEffect} 
          onBlur={onBlurEffect} 
        />
      </div>
    </div>
  )
}
