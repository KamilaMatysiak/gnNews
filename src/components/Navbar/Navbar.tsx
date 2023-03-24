import React from 'react'
import './Navbar.scss'

import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ListIcon from '@mui/icons-material/List';
import AppsIcon from '@mui/icons-material/Apps';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloseIcon from '@mui/icons-material/Close';

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setView } from '../../features/newsViewSlice'
import { setLightMode } from '../../features/lightModeSlice'
import { toggleSidebar } from '../../features/sidebarSlice';
import { toggleModal } from '../../features/feedbackSlice';
import { setLanguage } from '../../features/languageSlice';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'


const Navbar = () => {
  const newsView = useAppSelector(state => state.newsView.mode)
  const lightMode = useAppSelector(state => state.lightMode.mode)
  const sidebarState = useAppSelector(state => state.sidebar.open)
  const language = useAppSelector((state) => state.language.language)

  const dispatch = useAppDispatch()
  const { t, i18n } = useTranslation()

  const handleChangeLanguage = () => {
    if (language === "pl") {
      dispatch(setLanguage("en"))
      i18n.changeLanguage("en");
    } else {
      dispatch(setLanguage("pl"))
      i18n.changeLanguage("pl");
    }
  }

  const changeViewMode = () => {
    if (newsView === "list") {
      dispatch(setView("tiles"));
    } else {
      dispatch(setView("list"));
    }
  }

  const changeLightMode = () => {

    if (lightMode === "light") {
      dispatch(setLightMode("dark"));
    } else {
      dispatch(setLightMode("light"));
    }
  }

  return (
    <div className='navbar'>
      <div className='navbar__logo-container'>
        <div className='navbar__hamburger' onClick={() => dispatch(toggleSidebar())}>
          {sidebarState ? <CloseIcon /> : <MenuIcon />}
        </div>
        <Link className='navbar__logo' to="/">gnNEWS</Link>
      </div>
      <ul className='navbar__menu'>
        <li className='menu-item' onClick={changeViewMode}>{newsView === "list" ? <AppsIcon className='menu-item__icon' /> : <ListIcon className='menu-item__icon' />}</li>
        <li className='menu-item' onClick={handleChangeLanguage}><p className='menu-item__icon menu-item__icon--text'>{language === "pl" ? 'EN' : 'PL'}</p></li>
        <li className='menu-item' onClick={changeLightMode}>{lightMode === "light" ? <DarkModeIcon className='menu-item__icon menu-item__icon--dark' /> : <WbSunnyIcon className="menu-item__icon menu-item__icon--light" />}</li>
        <li className='menu-item'>
          <button className='button button--primary' onClick={() => dispatch(toggleModal())}>{t('feedbackButton')}</button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar