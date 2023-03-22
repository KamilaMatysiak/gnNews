import React from 'react'
import './Navbar.scss'
import dark from '../../assets/icons/dark-icon.svg';
import tile from '../../assets/icons/tile-icon.svg';
import english from '../../assets/icons/en-icon.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <a className='navbar__logo' href="/">gnNEWS</a>
      <ul className='navbar__menu'>
        <li className='menu-item'><img className='menu-item__icon' src={tile} alt="List"/></li>
        <li className='menu-item'><img className='menu-item__icon' src={english} alt="EN"/></li>
        <li className='menu-item'><img className='menu-item__icon' src={dark} alt="Darkmode"/></li>
        <li className='menu-item'>
          <button className='button button--primary'>SHOW</button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar