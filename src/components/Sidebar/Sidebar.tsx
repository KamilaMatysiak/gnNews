import React, { useEffect } from 'react'
import './Sidebar.scss'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchCountries, CountryType } from '../../features/countriesSlice'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const countries = useAppSelector((state) => state.countries)
  const language = useAppSelector((state) => state.language.language)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCountries())
  }, [])

  return (
    <div className='sidebar'>
      <div className='sidebar__content'>
        {countries.countries.map((country: CountryType, i) => (
          <Link key={i} className='country-item' to={`/country/${country.cca2}`}>
            <img className="country-item__img" src={country.flags.svg} />
            <p className="country-item__name">{language === "pl" ? country.translations.pol.common : country.name.common}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar